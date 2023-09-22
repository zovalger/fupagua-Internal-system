const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const UserLogs = require("../models/UserLogs.model");
const { ROOT_USER, LOGOUT_TIME } = require("../config");
const { getAllPermissions } = require("../config/permissionsSystem");

const createUser_service = async ({
	name,
	CI,
	birthdate,
	address,
	phone,
	email,
	perfilImg,
	permissions,
	password,
}) => {
	try {
		// buscar si ya hay uno registrado
		const oldUser = await User.findOne({ where: { email } });

		if (oldUser) return { error: true, message: "Correo ya esta registrado" };

		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);
		const data = {
			name,
			CI,
			birthdate,
			address,
			phone,
			email,
			perfilImg,
			permissions,
			password: hash,
		};

		const user = await User.create(data);

		return user;
	} catch (error) {
		console.log(error);
	}
};

const updateUser_service = async (
	id,
	{
		name,
		CI,
		birthdate,
		address,
		phone,
		email,
		perfilImg,
		permissions,
		password,
	}
) => {
	try {
		// buscar si ya hay uno registrado

		const oldUser = await getUser_By_Email_service(email);
		if (oldUser && oldUser.id != id)
			return { error: true, message: "Correo ya esta registrado" };

		const data = {
			name,
			CI,
			birthdate,
			address,
			phone,
			email,
			perfilImg,
			permissions,
		};

		if (password) {
			const salt = await bcrypt.genSalt(10);
			const hash = await bcrypt.hash(password, salt);
			data.password = hash;
		}

		const user = await User.findByPk(id);

		await user.update(data);

		return user;
	} catch (error) {
		console.log(error);
	}
};

const getAllUser_service = async () => {
	try {
		const users = await User.findAll({ order: [["name"]] });

		return users.map((u) => {
			u.permissions = JSON.parse(u.permissions);
			return u;
		});
	} catch (error) {
		console.log(error);
	}
};

const getUser_service = async (id) => {
	try {
		const user = await User.findByPk(id);

		user.permissions = JSON.parse(user.permissions);
		console.log(user);

		return user;
	} catch (error) {
		console.log(error);
	}
};

const getUserAndLogs_service = async (id) => {
	try {
		const user = await User.findByPk(id, { include: { model: UserLogs } });

		user.permissions = JSON.parse(user.permissions);

		return user;
	} catch (error) {
		console.log(error);
	}
};

const getUser_By_Email_service = async (email) => {
	try {
		const user = await User.findOne({ where: { email } });

		user.permissions = JSON.parse(user.permissions);

		return user;
	} catch (error) {
		console.log(error);
	}
};

const updateUserLogoutTime_service = async (userId) => {
	if (userId <= 0 || !userId) return;
	try {
		const user = await User.findByPk(userId);

		console.log(LOGOUT_TIME);
		console.log("aumento de fecha");
		await user.update({
			logout_date: new Date(Date.now() + 1000 * 60 * LOGOUT_TIME),
		});

		return user;
	} catch (error) {
		console.log(error);
	}
};
const getUserLogoutTime_service = async (userId) => {
	if (userId <= 0 || !userId) return;

	try {
		const user = await User.findByPk(userId);
		// console.log(time);

		return { logout_date: user.logout_date };
	} catch (error) {
		console.log(error);
	}
};

const getRootData_service = () => {
	let a = {
		id: -100,
		email: ROOT_USER,
		name:"Root",
		role: "root",
		permissions: getAllPermissions(),
		logout_date: new Date(Date.now() + 1000 * 60 * LOGOUT_TIME),
	};
	console.log(a);
	return a;
};

module.exports = {
	createUser_service,
	updateUser_service,
	getAllUser_service,
	getUser_service,
	getUser_By_Email_service,
	getUserAndLogs_service,

	updateUserLogoutTime_service,
	getUserLogoutTime_service,

	getRootData_service,
};
