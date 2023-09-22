const permissionsSystem = {
	//	bibliotecaView: "Ver la biblioteca",
	bibliotecaEdit: "Editar Libros de biblioteca",

	testCreation: "Test: Crear Test para pacientes",

	patientView: "Ver pacientes",
	patientEdit: "Añadir y Editar pacientes",

	landingView: "Ver modulo de edicion de pagina",
	landingEdit: "Editar datos del modulo de edicion de pagina",

	userView: "Usuarios: Ver usuarios registrados",
	userEdit: "Usuarios: Editar usuarios ",
	bitacoraView: "Ver Bitácora (acciones de los usuarios)",
};

const getAllPermissions = () => {
	let p = [];
	for (const key in permissionsSystem) {
		if (Object.hasOwnProperty.call(permissionsSystem, key)) {
			p.push(key);
		}
	}
	return p;
};

module.exports = { permissionsSystem, getAllPermissions };
