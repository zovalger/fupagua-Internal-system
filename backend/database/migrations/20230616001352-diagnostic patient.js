"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				queryInterface.addColumn("patients", "procedenciaType", {
					type: Sequelize.STRING(255),
					defaultValue: "",
				}),
				queryInterface.addColumn("patients", "procedenciaDiagnostico", {
					type: Sequelize.STRING(255),
					defaultValue: "",
				}),
				queryInterface.addColumn("patients", "phoneNumberPatient", {
					type: Sequelize.STRING(255),
					defaultValue: "",
				}),
			]);
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				queryInterface.removeColumn("patients", "procedenciaType", {
					transaction: t,
				}),
				queryInterface.removeColumn("patients", "procedenciaDiagnostico", {
					transaction: t,
				}),

				queryInterface.removeColumn("patients", "phoneNumberPatient", {
					transaction: t,
				}),
			]);
		});
	},
};
