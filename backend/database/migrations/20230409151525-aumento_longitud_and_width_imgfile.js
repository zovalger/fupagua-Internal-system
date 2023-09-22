"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const tables = [
			"videolinks",
			"fupaguaservices",
			"fupaguaempleados",
			"books",
		];

		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				tables.map((table) =>
					queryInterface.changeColumn(table, "description", {
						type: Sequelize.STRING(1000),
						allowNull: true,
						defaultValue: "",
					})
				),

				queryInterface.changeColumn("representatives", "address", {
					type: Sequelize.STRING(500),
					allowNull: true,
					defaultValue: "",
				}),

				queryInterface.addColumn("imgfiles", "width", {
					type: Sequelize.INTEGER,
					defaultValue: 512,
				}),
			]);
		});
	},

	async down(queryInterface, Sequelize) {
		const tables = [
			"videolinks",
			"fupaguaservices",
			"fupaguaempleados",
			"books",
		];

		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				tables.map((table) =>
					queryInterface.changeColumn(table, "description", {
						type: Sequelize.STRING(255),
						allowNull: true,
						defaultValue: "",
					})
				),

				queryInterface.changeColumn("representatives", "address", {
					type: Sequelize.STRING(255),
					allowNull: true,
					defaultValue: "",
				}),

				queryInterface.removeColumn("imgfiles", "width", {
					transaction: t,
				}),
			]);
		});
	},
};
