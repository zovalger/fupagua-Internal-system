const { verify } = require("jsonwebtoken");
const { SECRET_WORD } = require("../config");
const ErrorsMessages = require("../config/errorsMessages");
const roleSystem = require("../config/rolesSystem");
const {
	getUser_By_Email_service,
	updateUserLogoutTime_service,
	getRootData_service,
} = require("../services/userService");
const { createTokenAndCookie } = require("../helpers/createTokenAndCookie");

const authUser = async (req, res, next) => {
	const { authCookie } = req.cookies;

	if (!authCookie)
		return res
			.status(401)
			.json({ error: true, message: ErrorsMessages.tokenNotFound });

	let user = {};

	try {
		user = verify(authCookie, SECRET_WORD);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ error, message: ErrorsMessages.tokenInvalidOrDefeated });
	}

	try {
		let userJSON =
			user.role === roleSystem.root
				? getRootData_service()
				: await getUser_By_Email_service(user.email);

		if (!userJSON)
			return res
				.status(400)
				.json({ error: true, message: ErrorsMessages.userNotFound });

		userJSON = JSON.parse(JSON.stringify(userJSON));
		req.user = userJSON;

		await updateUserLogoutTime_service(userJSON.id);

		// asignar nuevamente la cookie
		const serialized = createTokenAndCookie(userJSON);
		res.setHeader("Set-Cookie", serialized);

		return next();
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error, message: ErrorsMessages.inServer });
	}
};

module.exports = { authUser };
