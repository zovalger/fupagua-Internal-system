"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				// Crear una nueva tabla
				queryInterface.createTable("addresses", {
					id: {
						type: Sequelize.INTEGER,
						allowNull: false,
						autoIncrement: true,
						primaryKey: true,
					},

					id_estado: {
						type: Sequelize.INTEGER,
						allowNull: true,
						references: {
							model: "estados",
							key: "id_estado",
						},
					},

					id_municipio: {
						type: Sequelize.INTEGER,
						allowNull: true,
						references: {
							model: "municipios",
							key: "id_municipio",
						},
					},

					id_parroquia: {
						type: Sequelize.INTEGER,
						allowNull: true,
						references: {
							model: "parroquias",
							key: "id_parroquia",
						},
					},

					id_ciudad: {
						type: Sequelize.INTEGER,
						allowNull: true,
						references: {
							model: "ciudades",
							key: "id_ciudad",
						},
					},

					patientId: {
						type: Sequelize.INTEGER,
						allowNull: true,
						references: {
							model: "patients",
							key: "id",
						},
					},

					dir: { type: Sequelize.STRING(255), defaultValue: "" },

					createdAt: {
						type: Sequelize.DATE,
						allowNull: false,
					},
					updatedAt: {
						type: Sequelize.DATE,
						allowNull: false,
					},
				}),
			]);
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([queryInterface.dropTable("addresses")]);
		});
	},
};
