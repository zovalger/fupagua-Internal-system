const typeActionSystem = require("../config/typeActionSystem");
const User = require("../models/User.model");
const UserLogs = require("../models/UserLogs.model");

const formateData = (type, user, action, datos) => ({
	userId: user ? (user.id >= 1 ? user.id : null) : null,
	type,
	action,
	datos: datos ? JSON.stringify(datos) : null,
});

const ActionsSystem = {};

// *********************************************************
// 								obtener los registros
// *********************************************************
ActionsSystem.getUserLogs_by_UserId_service = async (id) =>
	await UserLogs.findAll({
		where: { userId: id },
		order: [["createdAt", "desc"]],
		include: { model: User },
	});

ActionsSystem.getAllUserLogs_service = async () =>
	await UserLogs.findAll({
		order: [["createdAt", "desc"]],
		include: { model: User },
	});

// *********************************************************
// 									Crear registros
// *********************************************************

// autenticacion / inicio de sesion usuarios

ActionsSystem.userLogin = async (user) => {
	await UserLogs.create(
		formateData(typeActionSystem.login, user, `Inicio de sesion`),
		{ include: User }
	);
};

ActionsSystem.userCreate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.create,
			user,
			`Registró el usuario "${datos.id}"`,
			datos
		),
		{ include: User }
	);

ActionsSystem.userUpdate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.update,
			user,
			`Modifico datos del usuario  "${datos.id}"`,
			datos
		),

		{ include: User }
	);

// pacientes

ActionsSystem.patientCreate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.create,
			user,
			`Registro el paciente "${datos.id}"`,
			datos
		),

		{ include: User }
	);

ActionsSystem.patientUpdate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.update,
			user,
			`Modifico el paciente "${datos.id}"`,
			datos
		),
		{ include: User }
	);

ActionsSystem.patientDelete = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.delete,
			user,
			`Movio a papelera a el paciente "${datos.id}"`,
			datos
		),
		{ include: User }
	);

// representantes

ActionsSystem.representativeCreate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.create,
			user,
			`Registro el representante "${datos.id}"`,
			datos
		),

		{ include: User }
	);

ActionsSystem.representativeUpdate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.update,
			user,
			`Modifico el representante "${datos.id}"`,
			datos
		),
		{ include: User }
	);

ActionsSystem.representativeDelete = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.delete,
			user,
			`Movio a papelera a el representante "${datos.id}"`,
			datos
		),
		{ include: User }
	);

// libros
ActionsSystem.bookCreate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.create,
			user,
			`Registro el libro "${datos.id}"`,
			datos
		),

		{ include: User }
	);

ActionsSystem.bookUpdate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.update,
			user,
			`Modifico el libro "${datos.id}"`,
			datos
		),
		{ include: User }
	);

ActionsSystem.bookDelete = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.delete,
			user,
			`Movio a papelera el libro "${datos.id}"`,
			datos
		),
		{ include: User }
	);

// fichas

// ActionsSystem.bookCreate = async (user, datos) => {};
// ActionsSystem.bookUpdate = async (user, datos) => {};
// ActionsSystem.bookDelete = async (user, datos) => {};

// ****************************************************
//                     landing
// ****************************************************

// libros recomendados

ActionsSystem.bookRecommendedCreate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.create,
			user,
			`Registro el libro recomendado "${datos.id}"`,
			datos
		),

		{ include: User }
	);
ActionsSystem.bookRecommendedUpdate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.update,
			user,
			`Modifico el libro recomendado "${datos.id}"`,
			datos
		),
		{ include: User }
	);
ActionsSystem.bookRecommendedDelete = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.delete,
			user,
			`Movio a papelera el libro recomendado "${datos.id}"`,
			datos
		),
		{ include: User }
	);

// categorias libros recomendados

ActionsSystem.bookRecommendedCategoryCreate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.create,
			user,
			`Registro una categoria de libro recomendado "${datos.id}"`,
			datos
		),

		{ include: User }
	);
ActionsSystem.bookRecommendedCategoryUpdate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.update,
			user,
			`Modifico una categoria de libro recomendado "${datos.id}"`,
			datos
		),
		{ include: User }
	);
ActionsSystem.bookRecommendedCategoryDelete = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.delete,
			user,
			`Movio a papelera una categoria de libro recomendado "${datos.id}"`,
			datos
		),
		{ include: User }
	);

// eventpost

ActionsSystem.eventPostCreate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.create,
			user,
			`Registro un nuevo evento "${datos.id}"`,
			datos
		),

		{ include: User }
	);
ActionsSystem.eventPostUpdate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.update,
			user,
			`Modifico un evento "${datos.id}"`,
			datos
		),
		{ include: User }
	);
ActionsSystem.eventPostDelete = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.delete,
			user,
			`Movio a papelera evento "${datos.id}"`,
			datos
		),
		{ include: User }
	);

// fupagua empleado

ActionsSystem.fupaguaEmpleadoCreate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.create,
			user,
			`Registro un nuevo especialista en la landing "${datos.id}"`,
			datos
		),

		{ include: User }
	);
ActionsSystem.fupaguaEmpleadoUpdate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.update,
			user,
			`Modifico un registro de un especialista en la landing "${datos.id}"`,
			datos
		),
		{ include: User }
	);
ActionsSystem.fupaguaEmpleadoDelete = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.delete,
			user,
			`Movio a papelera un registro del especialista "${datos.id}"`,
			datos
		),
		{ include: User }
	);

// fupagua servicio

ActionsSystem.fupaguaServiceCreate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.create,
			user,
			`Registro un nuevo servicio de fupagua "${datos.id}"`,
			datos
		),

		{ include: User }
	);
ActionsSystem.fupaguaServiceUpdate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.update,
			user,
			`Modifico un servicio de fupagua "${datos.id}"`,
			datos
		),
		{ include: User }
	);
ActionsSystem.fupaguaServiceDelete = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.delete,
			user,
			`Movio a papelera un servicio de fupagua "${datos.id}"`,
			datos
		),
		{ include: User }
	);

// videolinks

ActionsSystem.videoLinkCreate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.create,
			user,
			`Registro un nuevo video "${datos.id}"`,
			datos
		),

		{ include: User }
	);
ActionsSystem.videoLinkUpdate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.update,
			user,
			`Modifico un registro un video "${datos.id}"`,
			datos
		),
		{ include: User }
	);
ActionsSystem.videoLinkDelete = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.delete,
			user,
			`Movio a papelera el registro del video "${datos.id}"`,
			datos
		),
		{ include: User }
	);

// videolinks

ActionsSystem.videoLinkCategoryCreate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.create,
			user,
			`Registro una nueva categoria de videos "${datos.id}"`,
			datos
		),

		{ include: User }
	);
ActionsSystem.videoLinkCategoryUpdate = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.update,
			user,
			`Modifico un registro de categoria de videos "${datos.id}"`,
			datos
		),
		{ include: User }
	);
ActionsSystem.videoLinkCategoryDelete = async (user, datos) =>
	await UserLogs.create(
		formateData(
			typeActionSystem.delete,
			user,
			`Movio a papelera el registro una categoria de videos "${datos.id}"`,
			datos
		),
		{ include: User }
	);

module.exports = ActionsSystem;
