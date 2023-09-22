"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				// Crear una nueva tabla
				queryInterface.createTable("user_logs", {
					id: {
						type: Sequelize.INTEGER,
						allowNull: false,
						autoIncrement: true,
						primaryKey: true,
					},
					userId: {
						type: Sequelize.INTEGER,
						allowNull: true,
						references: {
							model: "user_logs",
							key: "id",
						},
					},
					type: { type: Sequelize.STRING(255) },
					action: { type: Sequelize.STRING(255), allowNull: false },
					datos: { type: Sequelize.STRING(1500), allowNull: true },

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
			return Promise.all([queryInterface.dropTable("user_logs")]);
		});
	},
};
