const { Op } = require("sequelize");
const PatientAntPostnatal = require("../models/PatientAntPostnatal.model");
const { getPatient_Service } = require("./PatientService");

// crud de relaciones y
const createAntPostnatal = async (name) => {
	try {
		const oldAnPa = await PatientAntPostnatal.findOne({
			where: { name },
		});

		const antPa = oldAnPa
			? oldAnPa
			: await PatientAntPostnatal.create({ name });

		return antPa;
	} catch (error) {
		console.log(error);
	}
};

const getAllAntPostnatal = async () => {
	try {
		const antPa = await PatientAntPostnatal.findAll();

		return antPa;
	} catch (error) {
		console.log(error);
	}
};


const getAntPostnatal_By_Id = async (id) => {
	try {
		const antPa = await PatientAntPostnatal.findByPk(id);

		return antPa;
	} catch (error) {
		console.log(error);
	}
};

const getAntPostnatal_By_Name = async (name) => {
	try {
		const antPa = await PatientAntPostnatal.findOne({
			where: { name },
		});

		return antPa;
	} catch (error) {
		console.log(error);
	}
};

const updateAntPostnatal = async (id, data) => {
	try {
		const antPa = await getAntPostnatal_By_Id(id);

		if (!antPa) return;

		antPa.update(data);

		return antPa.reload();
	} catch (error) {
		console.log(error);
	}
};

const deleteAntPostnatal = async () => {
	try {
		const antPa = await getAntPostnatal_By_Id(id);

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

const createOrUpdateAntPostnatal = async ({ id, name }) => {
	try {
		let antPa = await getAntPostnatal_By_Id(id);

		if (!antPa) antPa = await getAntPostnatal_By_Name(name);

		antPa = !antPa
			? await createAntPostnatal(name)
			: antPa && antPa.name !== name
			? await updateAntPostnatal(antPa.id, { name })
			: antPa;

		return antPa;
	} catch (error) {
		console.log(error);
	}
};

const C_U_D_AntPostnatalOfPatinet_Service = async (patientId, data = null) => {
	if (!patientId || !data) return;

	console.log("creacion de nuevos antecedentes");

	const newAntPas = await Promise.all(
		await data.map(async (antp) => {
			console.log("datos a insertar", antp);
			const n = await createOrUpdateAntPostnatal(antp);

			console.log("datos insertados", n);

			return n;
		})
	);

	const patient = await getPatient_Service(patientId);

	await patient.setAntPostnatal(newAntPas);

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

const getAntPostnatal_By_Patient_Service = async (patientId) => {
	try {
		const patient = await getPatient_Service(patientId);

		const antPa = await patient.getAntPostnatal();

		return antPa ? antPa : null;
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	// exterior
	C_U_D_AntPostnatalOfPatinet_Service,
	getAntPostnatal_By_Patient_Service,
	getAllAntPostnatal
};
