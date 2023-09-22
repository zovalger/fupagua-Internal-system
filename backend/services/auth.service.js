const bcrypt = require("bcrypt");
const { ROOT_USER, ROOT_PASSWORD } = require("../config");
const { getAllPermissions } = require("../config/permissionsSystem");
const { getUser_By_Email_service, getRootData_service } = require("./userService");

const loginUser_service = async ({ email, password }) => {
	if (!email || !password) return;

	console.log(email, password);
	try {
		if (email == ROOT_USER && password == ROOT_PASSWORD)
			return getRootData_service();

		const user = await getUser_By_Email_service(email);

		if (!user) return;

		const result = await bcrypt.compare(password, user.password);
		console.log(user);
		console.log(result);

		return result ? user : null;
	} catch (error) {
		console.log(error);
	}
};

module.exports = { loginUser_service };
