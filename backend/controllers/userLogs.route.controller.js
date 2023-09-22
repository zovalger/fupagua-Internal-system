const ErrorsMessages = require("../config/errorsMessages");
const {
	getAllUserLogs_service,
	getUserLogs_by_UserId_service,
} = require("../services/ActionSystemService");

const getAllUserLogs_controller = async (req, res) => {
	try {
		// creacion del waypoint
		const user = await getAllUserLogs_service();

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

const getUserLogs_by_userId_controller = async (req, res) => {
	const { id } = req.params;

	try {
		// creacion del waypoint
		const user = await getUserLogs_by_UserId_service(id);

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
	getAllUserLogs_controller,
	getUserLogs_by_userId_controller,
};
