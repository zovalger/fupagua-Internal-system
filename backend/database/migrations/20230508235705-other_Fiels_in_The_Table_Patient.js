"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				queryInterface.addColumn("patients", "procedencia", {
					type: Sequelize.STRING(255),
					defaultValue: "",
				}),
				queryInterface.addColumn("patients", "diagnostico", {
					type: Sequelize.STRING(255),
					defaultValue: "",
				}),
			]);
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				queryInterface.removeColumn("patients", "procedencia", {
					transaction: t,
				}),
				queryInterface.removeColumn("patients", "diagnostico", {
					transaction: t,
				}),
			]);
		});
	},
};
