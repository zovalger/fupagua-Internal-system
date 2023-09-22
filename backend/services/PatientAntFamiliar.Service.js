const { Op } = require("sequelize");
const PatientAntFamiliar = require("../models/PatientAntFamiliar.model");
const PatientAntFamiliarIncidencia = require("../models/PatientAntFamiliarIncidencia.model");
const PatientAntFamiliarPariente = require("../models/PatientAntFamiliarPariente.model");
const { getPatient_Service } = require("./PatientService");

// ****************************************************************************
// 													crud de las incidencias
// ****************************************************************************
const createIncidencia = async (name) => {
	try {
		const oldFaI = await PatientAntFamiliarPariente.findOne({
			where: { name },
		});

		const antFaIncidecia = oldFaI
			? oldFaI
			: await PatientAntFamiliarIncidencia.create({ name });

		return antFaIncidecia;
	} catch (error) {
		console.log(error);
	}
};

const getAllIncidencias = async () => {
	try {
		const incidencias = await PatientAntFamiliarIncidencia.findAll();

		return incidencias;
	} catch (error) {
		console.log(error);
	}
};

const getIncidencia_By_Id = async (id) => {
	try {
		const antFaIncidecia = await PatientAntFamiliarIncidencia.findByPk(id);

		return antFaIncidecia;
	} catch (error) {
		console.log(error);
	}
};

const getIncidencia_By_Name = async (name) => {
	try {
		const antFaIncidecia = await PatientAntFamiliarIncidencia.findOne({
			where: { name },
		});

		return antFaIncidecia;
	} catch (error) {
		console.log(error);
	}
};

const updateIncidencia = async (id, data) => {
	try {
		const antF = await getIncidencia_By_Id(id);

		if (!antF) return;

		antF.update(data);

		return antF.reload();
	} catch (error) {
		console.log(error);
	}
};

const deleteIncidencia = async () => {
	try {
		const antF = await getIncidencia_By_Id(id);

		if (!antF) return;

		if (antF.status === "a") {
			return await antF.update({ status: "d" });
		} else {
			await antF.destroy();
			return { message: "eliminado" };
		}
	} catch (error) {
		console.log(error);
	}
};

const createOrUpdateIncidencia = async ({ id, name }) => {
	try {
		let antFIncidencia = await getIncidencia_By_Id(id);

		if (!antFIncidencia) antFIncidencia = await getIncidencia_By_Name(name);

		antFIncidencia = !antFIncidencia
			? await createIncidencia(name)
			: antFIncidencia && antFIncidencia.name !== name
			? await updateIncidencia(antFIncidencia.id, { name })
			: antFIncidencia;

		return antFIncidencia;
	} catch (error) {
		console.log(error);
	}
};

// ****************************************************************************
// 													crud de los Parientes
// ****************************************************************************

const createPariente = async (name) => {
	try {
		const oldFP = await PatientAntFamiliarPariente.findOne({ where: { name } });

		const antFaPariente = oldFP
			? oldFP
			: await PatientAntFamiliarPariente.create({ name });

		return antFaPariente;
	} catch (error) {
		console.log(error);
	}
};
const getAllParientes = async () => {
	try {
		const antFaPariente = await PatientAntFamiliarPariente.findAll();

		return antFaPariente;
	} catch (error) {
		console.log(error);
	}
};

const getPariente_By_Id = async (id) => {
	try {
		const antFaPariente = await PatientAntFamiliarPariente.findByPk(id);

		return antFaPariente;
	} catch (error) {
		console.log(error);
	}
};

const getPariente_By_Name = async (name) => {
	try {
		console.log("obtener pariente por nombre:", name);
		const antFaPariente = await PatientAntFamiliarPariente.findOne({
			where: { name },
		});

		return antFaPariente;
	} catch (error) {
		console.log(error);
	}
};

const updatePariente = async (id, data) => {
	try {
		console.log("actualizando pariente:", data);
		const antFPariente = await getPariente_By_Id(id);

		if (!antFPariente) return;

		antFPariente.update(data);

		return antFPariente.reload();
	} catch (error) {
		console.log(error);
	}
};

const deletePariente = async (id) => {
	try {
		const antFPariente = await getPariente_By_Id(id);

		if (!antFPariente) return;

		if (antFPariente.status === "a") {
			return await antFPariente.update({ status: "d" });
		} else {
			await antFPariente.destroy();
			return { message: "eliminado" };
		}
	} catch (error) {
		console.log(error);
	}
};

const createOrUpdatePariente = async ({ id, name }) => {
	try {
		console.log("crear o actualizar un pariente");
		let antFPariente = await getPariente_By_Id(id);

		if (!antFPariente) antFPariente = await getPariente_By_Name(name);

		antFPariente = !antFPariente
			? await createPariente(name)
			: antFPariente && antFPariente.name !== name
			? await updatePariente(antFPariente.id, { name })
			: antFPariente;

		return antFPariente;
	} catch (error) {
		console.log(error);
	}
};

// crud de los datos para el paciente

// *************************************************************
// 							crud de los antecedentes familiares
// *************************************************************

const createAntFamiliar_Service = async (patientId, pariente, incidencia) => {
	try {
		console.log("creacion individual de cada antecedente");

		console.log("datos recibidos", patientId, pariente, incidencia);

		const antFPariente = await createOrUpdatePariente(pariente);
		const antFaIncidecia = await createOrUpdateIncidencia(incidencia);

		const query = {
			patientId,
			patientAntFamiliarParienteId: antFPariente.id,
			patientAntFamiliarIncidenciaId: antFaIncidecia.id,
		};

		// ver si ya estaba creada la relacion
		const oldAntF = await PatientAntFamiliar.findOne({ where: query });

		if (oldAntF) return oldAntF;

		const ids = query;

		const antF = await PatientAntFamiliar.create(ids);

		// await antF.setPatientAntFamiliarPariente(antFPariente);
		// await antF.setPatientAntFamiliarIncidencia(antFaIncidecia);

		return antF;
	} catch (error) {
		console.log(error);
	}
};

// {
// 	patientAntFamiliarPariente:{id:"",name:""},
// 	patientAntFamiliarIncidencia
// }
const C_U_D_AntFamiliarOfPatinet_Service = async (patientId, data = null) => {
	if (!patientId || !data) return;

	console.log("creacion actualizacion de antecedentes familiares");

	const oldAntFs = await PatientAntFamiliar.findAll({
		where: { patientId },
	});

	console.log("obtencion de viejos antecedentes", oldAntFs);

	console.log("creacion de nuevos antecedentes");
	const newAntFs = await Promise.all(
		await data.map(async (antf) => {
			console.log("datos a insertar", antf);
			const n = await createAntFamiliar_Service(
				patientId,
				antf.pariente,
				antf.incidencia
			);

			console.log("datos insertados", n);

			return n;
		})
	);

	await Promise.all(
		await oldAntFs.map(async (oantf) => {
			let is = false;

			await newAntFs.map(async (nantf) => {
				if (oantf.id == nantf.id) is = true;
			});

			if (!is) await oantf.destroy();
		})
	);

	return newAntFs;
};

const getAntFamiliares_By_Patient_Service = async (patientId) => {
	try {
		const antf = await PatientAntFamiliar.findAll({
			where: { patientId },
			include: [
				{ model: PatientAntFamiliarPariente, as: "pariente" },
				{ model: PatientAntFamiliarIncidencia, as: "incidencia" },
			],
		});

		return antf ? antf : null;
	} catch (error) {
		console.log(error);
	}
};

const getListOfParientesAndIncidencias = async () => {
	try {
		const lists = {};

		lists.parientes = await getAllParientes();
		lists.incidencias = await getAllIncidencias();

		return lists;
	} catch (error) {
		console.log(error);
	}
};

const getAntFamiliar_Service = async () => {};

const updateAntFamiliar_Service = async () => {};

const deleteAntFamiliar_Service = async () => {};

module.exports = {
	createAntFamiliar_Service,
	getAntFamiliar_Service,
	updateAntFamiliar_Service,
	deleteAntFamiliar_Service,

	getAllIncidencias,
	getAllParientes,
	// exterior
	C_U_D_AntFamiliarOfPatinet_Service,
	getAntFamiliares_By_Patient_Service,

	getListOfParientesAndIncidencias,
};
