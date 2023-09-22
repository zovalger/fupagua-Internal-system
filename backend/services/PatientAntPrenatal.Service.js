const { Op } = require("sequelize");
const PatientAntPrenatal = require("../models/PatientAntPrenatal.model");
const { getPatient_Service } = require("./PatientService");

// crud de relaciones y
const createAntPrenatal = async (name) => {
	try {
		const oldAnPa = await PatientAntPrenatal.findOne({
			where: { name },
		});

		const antPa = oldAnPa ? oldAnPa : await PatientAntPrenatal.create({ name });

		return antPa;
	} catch (error) {
		console.log(error);
	}
};

const getAllAntPrenatal = async () => {
	try {
		const antPa = await PatientAntPrenatal.findAll();

		return antPa;
	} catch (error) {
		console.log(error);
	}
};

const getAntPrenatal_By_Id = async (id) => {
	try {
		const antPa = await PatientAntPrenatal.findByPk(id);

		return antPa;
	} catch (error) {
		console.log(error);
	}
};

const getAntPrenatal_By_Name = async (name) => {
	try {
		const antPa = await PatientAntPrenatal.findOne({
			where: { name },
		});

		return antPa;
	} catch (error) {
		console.log(error);
	}
};

const updateAntPrenatal = async (id, data) => {
	try {
		const antPa = await getAntPrenatal_By_Id(id);

		if (!antPa) return;

		antPa.update(data);

		return antPa.reload();
	} catch (error) {
		console.log(error);
	}
};

const deleteAntPrenatal = async () => {
	try {
		const antPa = await getAntPrenatal_By_Id(id);

		if (!antPa) return;

		if (antPa.status === "a") {
			return await antPa.update({ status: "d" });
		} else {
			await antPa.destroy();
			return { message: "eliminado" };
		}
	} catch (error) {
		console.log(error);
	}
};

const createOrUpdateAntPrenatal = async ({ id, name }) => {
	try {
		let antPa = await getAntPrenatal_By_Id(id);

		if (!antPa) antPa = await getAntPrenatal_By_Name(name);

		antPa = !antPa
			? await createAntPrenatal(name)
			: antPa && antPa.name !== name
			? await updateAntPrenatal(antPa.id, { name })
			: antPa;

		return antPa;
	} catch (error) {
		console.log(error);
	}
};

const C_U_D_AntPrenatalOfPatinet_Service = async (patientId, data = null) => {
	if (!patientId || !data) return;

	console.log("creacion de nuevos antecedentes");

	const newAntPas = await Promise.all(
		await data.map(async (antp) => {
			console.log("datos a insertar", antp);
			const n = await createOrUpdateAntPrenatal(antp);

			console.log("datos insertados", n);

			return n;
		})
	);

	const patient = await getPatient_Service(patientId);

	await patient.setAntPrenatal(newAntPas);

	// await Promise.all(
	// 	await oldAntPas.map(async (oantf) => {
	// 		let is = false;

	// 		await newAntPas.map(async (nantf) => {
	// 			if (oantf.id == nantf.id) is = true;
	// 		});

	// 		if (!is) await oantf.destroy();
	// 	})
	// );

	return newAntPas;
};

const getAntPrenatal_By_Patient_Service = async (patientId) => {
	try {
		const patient = await getPatient_Service(patientId);

		const antPa = await patient.getAntPrenatal();

		return antPa ? antPa : null;
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	// exterior
	C_U_D_AntPrenatalOfPatinet_Service,
	getAntPrenatal_By_Patient_Service,
	getAllAntPrenatal
};
