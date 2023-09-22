const { Op } = require("sequelize");
const PatientAntParanatal = require("../models/PatientAntParanatal.model");
const { getPatient_Service } = require("./PatientService");

// crud de relaciones y
const createAntParanatal = async (name) => {
	try {
		const oldAnPa = await PatientAntParanatal.findOne({
			where: { name },
		});

		const antPa = oldAnPa
			? oldAnPa
			: await PatientAntParanatal.create({ name });

		return antPa;
	} catch (error) {
		console.log(error);
	}
};

const getAllAntParanatal = async () => {
	try {
		const antPa = await PatientAntParanatal.findAll();

		return antPa;
	} catch (error) {
		console.log(error);
	}
};
const getAntParanatal_By_Id = async (id) => {
	try {
		const antPa = await PatientAntParanatal.findByPk(id);

		return antPa;
	} catch (error) {
		console.log(error);
	}
};

const getAntParanatal_By_Name = async (name) => {
	try {
		const antPa = await PatientAntParanatal.findOne({
			where: { name },
		});

		return antPa;
	} catch (error) {
		console.log(error);
	}
};

const updateAntParanatal = async (id, data) => {
	try {
		const antPa = await getAntParanatal_By_Id(id);

		if (!antPa) return;

		antPa.update(data);

		return antPa.reload();
	} catch (error) {
		console.log(error);
	}
};

const deleteAntParanatal = async () => {
	try {
		const antPa = await getAntParanatal_By_Id(id);

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

const createOrUpdateAntParanatal = async ({ id, name }) => {
	try {
		let antPa = await getAntParanatal_By_Id(id);

		if (!antPa) antPa = await getAntParanatal_By_Name(name);

		antPa = !antPa
			? await createAntParanatal(name)
			: antPa && antPa.name !== name
			? await updateAntParanatal(antPa.id, { name })
			: antPa;

		return antPa;
	} catch (error) {
		console.log(error);
	}
};

const C_U_D_AntParanatalOfPatinet_Service = async (patientId, data = null) => {
	if (!patientId || !data) return;

	console.log("creacion de nuevos antecedentes");

	const newAntPas = await Promise.all(
		await data.map(async (antp) => {
			console.log("datos a insertar", antp);
			const n = await createOrUpdateAntParanatal(antp);

			console.log("datos insertados", n);

			return n;
		})
	);

	const patient = await getPatient_Service(patientId);

	await patient.setAntParanatal(newAntPas);

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

const getAntParanatal_By_Patient_Service = async (patientId) => {
	try {
		const patient = await getPatient_Service(patientId);

		const antPa = await patient.getAntParanatal();

		return antPa ? antPa : null;
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	// exterior
	C_U_D_AntParanatalOfPatinet_Service,
	getAntParanatal_By_Patient_Service,
	getAllAntParanatal
};
