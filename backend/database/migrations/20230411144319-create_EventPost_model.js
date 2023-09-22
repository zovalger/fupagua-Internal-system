"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				// Crear una nueva tabla
				queryInterface.createTable("eventposts", {
					id: {
						type: Sequelize.INTEGER,
						allowNull: false,
						autoIncrement: true,
						primaryKey: true,
					},
					title: {
						type: Sequelize.STRING(500),
						allowNull: false,
					},
					description: { type: Sequelize.STRING(1000), defaultValue: "" },

					status: { type: Sequelize.CHAR, defaultValue: "a" },
					syncCloud: { type: Sequelize.BOOLEAN, defaultValue: false },

					toDate: { type: Sequelize.DATE },
					link: { type: Sequelize.STRING, allowNull: true, defaultValue: "" },

					imgfileId: {
						type: Sequelize.INTEGER,
						allowNull: true,
						references: {
							model: "imgfiles",
							key: "id",
						},
					},

					createdAt : {
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
			return Promise.all([queryInterface.dropTable("eventposts")]);
		});
	},
};
