"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
     * Add seed commands here.
     *
     * Example:
  
    */

		await queryInterface.bulkInsert(
			"patients",
			[
				{
					name: "John Doe",
					isBetaMember: false,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		//  * Add commands to revert seed here.
		//  *
		//  * Example:
		await queryInterface.bulkDelete("People", null, {});
	},
};
