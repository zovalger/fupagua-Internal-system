"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				queryInterface.addColumn("users", "logout_date", {
					type: Sequelize.DATE,
					allowNull: true,
				}),
			]);
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				queryInterface.removeColumn("users", "logout_date", {
					transaction: t,
				}),
			]);
		});
	},
};
