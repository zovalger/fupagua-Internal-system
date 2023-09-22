const { serialize } = require("cookie");
const { sign, verify } = require("jsonwebtoken");

const { SECRET_WORD, ROOT_USER, ROOT_PASSWORD } = require("../config");
const ErrorsMessages = require("../config/errorsMessages");
const roleSystem = require("../config/rolesSystem");
const { loginUser_service } = require("../services/auth.service");
const {
	getUser_By_Email_service,
	getUserLogoutTime_service,
	updateUserLogoutTime_service,
} = require("../services/userService");
const ActionsSystem = require("../services/ActionSystemService");
const { createTokenAndCookie } = require("../helpers/createTokenAndCookie");

const loginUser_controller = async (req, res) => {
	try {
		const { email, password } = req.body;

		console.log(email, password);

		const user = await loginUser_service({ email, password });

		if (!user)
			return res.status(404).json({
				auth: false,
				error: true,
				message: ErrorsMessages.invalidCredentials,
			});

		const newVersion = await updateUserLogoutTime_service(user.id);
		const userJSON = JSON.parse(JSON.stringify(newVersion || user));

		userJSON.password = undefined;

		const serialized = createTokenAndCookie(userJSON);

		res.setHeader("Set-Cookie", serialized);

		await ActionsSystem.userLogin(user);

		return res.status(200).json({
			auth: true,
			message: "Login successful",
		});
	} catch (error) {
		console.log(error);
	}
};

const logoutUser_controller = (req, res) => {
	const { authCookie } = req.cookies;

	console.log("logout");

	if (!authCookie)
		return res
			.status(401)
			.json({ error: true, message: ErrorsMessages.tokenNotFound });

	try {
		const serialized = serialize("authCookie", null, {
			httpOnly: true,
			secure: false,
			// secure: process.env.NODE_ENV === "production",
			sameSite: true,
			maxAge: 0,
			path: "/",
		});

		res.setHeader("Set-Cookie", serialized);

		return res.status(200).json({
			auth: false,
			success: true,
			message: "Logout successful",
		});
	} catch (error) {
		console.log(error);
	}
};

const getUserLogoutTime_controller = async (req, res) => {
	const { id } = req.params;

	try {
		const time = await getUserLogoutTime_service(id);

		return res.status(200).json(time);
	} catch (error) {
		console.log(error);
	}
};

const profileUser_controller = async (req, res) => {
	const { authCookie } = req.cookies;

	if (!authCookie)
		return res
			.status(401)
			.json({ error: true, message: ErrorsMessages.tokenNotFound });

	let user = {};

	try {
		user = verify(authCookie, SECRET_WORD);
	} catch (error) {
		return res
			.status(400)
			.json({ error, message: ErrorsMessages.tokenInvalidOrDefeated });
	}

	try {
		let u =
			user.role === roleSystem.root
				? user
				: await getUser_By_Email_service(user.email);

		if (!u)
			return res
				.status(400)
				.json({ error: true, message: ErrorsMessages.userNotFound });

		u = JSON.parse(JSON.stringify(u));

		return res.status(200).json({ ...u, password: undefined });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error, message: ErrorsMessages.inServer });
	}
};
module.exports = {
	loginUser_controller,
	logoutUser_controller,
	profileUser_controller,
	getUserLogoutTime_controller,
};
