const ErrorsMessages = require("../config/errorsMessages");
const ActionsSystem = require("../services/ActionSystemService");
const {
	createUser_service,
	updateUser_service,
	getUser_service,
	getAllUser_service,
} = require("../services/userService");
const registerUser_controller = async (req, res) => {
	// obtencion de datos de la request
	const {
		name,
		CI,
		birthdate,
		address,
		phone,
		email,
		perfilImg,
		permissions,
		password,
	} = req.body;

	const data = {
		name,
		CI,
		birthdate,
		address,
		phone,
		email,
		perfilImg,
		permissions,
		password,
	};

	try {
		// creacion del waypoint
		const user = await createUser_service(data);

		// si no se creo se le envia un error 500
		if (!user)
			return res.status(500).json({
				error: true,
				message: `${ErrorsMessages.inServer}: no se creo el usuario`,
			});

		// si la funcion devuelve algun error se le enviara al cliente
		if (user.error) return res.status(500).json(user);

		await ActionsSystem.userCreate(req.user, user);

		// se devuelve el waypoint exitosamente
		return res.status(200).json(user);
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({ error: true, message: ErrorsMessages.inServer });
	}
};

const updateUser_controller = async (req, res) => {
	const { id } = req.params;

	// obtencion de datos de la request
	const {
		name,
		CI,
		birthdate,
		address,
		phone,
		email,
		perfilImg,
		permissions,
		password,
	} = req.body;

	const data = {
		name,
		CI,
		birthdate,
		address,
		phone,
		email,
		perfilImg,
		permissions,
		password,
	};

	try {
		// creacion del waypoint
		const user = await updateUser_service(id, data);

		// si no se creo se le envia un error 500
		if (!user)
			return res
				.status(500)
				.json({ error: true, message: ErrorsMessages.inServer });

		// si la funcion devuelve algun error se le enviara al cliente
		if (user.error) return res.status(500).json(user);

		await ActionsSystem.userUpdate(req.user, user);

		// se devuelve el waypoint exitosamente
		return res.status(200).json(user);
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({ error: true, message: ErrorsMessages.inServer });
	}
};

const getAllUser_controller = async (req, res) => {
	try {
		// creacion del waypoint
		const user = await getAllUser_service();

		// si no se creo se le envia un error 500
		if (!user)
			return res.status(500).json({
				error: true,
				message: ErrorsMessages.noData,
			});

		// si la funcion devuelve algun error se le enviara al cliente
		if (user.error) return res.status(500).json(user);

		// se devuelve el waypoint exitosamente
		return res.status(200).json(user);
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({ error: true, message: ErrorsMessages.inServer });
	}
};

const getUser_controller = async (req, res) => {
	const { id } = req.params;

	try {
		// creacion del waypoint
		const user = await getUser_service(id);

		// si no se creo se le envia un error 500
		if (!user)
			return res.status(500).json({
				error: true,
				message: ErrorsMessages.userNotFound,
			});

		// si la funcion devuelve algun error se le enviara al cliente
		if (user.error) return res.status(500).json(user);

		// se devuelve el waypoint exitosamente
		return res.status(200).json(user);
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({ error: true, message: ErrorsMessages.inServer });
	}
};

module.exports = {
	registerUser_controller,
	updateUser_controller,
	getUser_controller,
	getAllUser_controller,
};
