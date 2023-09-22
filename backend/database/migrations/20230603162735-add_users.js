"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				// Crear una nueva tabla
				queryInterface.createTable("users", {
					id: {
						type: Sequelize.INTEGER,
						allowNull: false,
						autoIncrement: true,
						primaryKey: true,
					},

					name: {
						type: Sequelize.STRING(255),
						allowNull: false,
					},

					CI: { type: Sequelize.STRING(255), allowNull: false },

					birthdate: { type: Sequelize.DATE },
					address: { type: Sequelize.STRING(255), allowNull: true },
					phone: { type: Sequelize.STRING(255), allowNull: true },
					email: { type: Sequelize.STRING(255), allowNull: false },
					password: { type: Sequelize.STRING(500), allowNull: false },
					perfilImg: {
						type: Sequelize.INTEGER,
						allowNull: true,
						references: {
							model: "imgfiles",
							key: "id",
						},
					},
					role: { type: Sequelize.STRING(255), allowNull: false },
					status: { type: Sequelize.CHAR, defaultValue: "a" },
					permissions: { type: Sequelize.TEXT },

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
			return Promise.all([queryInterface.dropTable("users")]);
		});
	},
};
