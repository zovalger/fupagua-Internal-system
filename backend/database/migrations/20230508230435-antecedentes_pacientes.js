"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const estructura = {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: { type: Sequelize.STRING(255), allowNull: false },
			status: { type: Sequelize.CHAR, defaultValue: "a" },
			createdAt: { type: Sequelize.DATE, allowNull: false },
			updatedAt: { type: Sequelize.DATE, allowNull: false },
		};

		const estructuraTablaJoin = (paramId, to) => ({
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},

			[paramId]: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: { model: `${to}`, key: "id" },
			},

			patientId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: { model: "patients", key: "id" },
			},
			createdAt: { type: Sequelize.DATE, allowNull: false },
			updatedAt: { type: Sequelize.DATE, allowNull: false },
		});

		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				// patient ant familiar incidencia
				queryInterface.createTable(
					"patient_antfamiliar_incidencia",
					estructura
				),

				// patient ant familiar pariente
				queryInterface.createTable("patient_antfamiliar_parientes", estructura),

				// patient antparanatal
				queryInterface.createTable("patient_antparanatals", estructura),

				// patient ant postnatal
				queryInterface.createTable("patient_antpostnatals", estructura),

				// patient ant prenatal
				queryInterface.createTable("patient_antprenatals", estructura),

				// patient and antparanatl
				queryInterface.createTable(
					"patient_and_antparanatal",
					estructuraTablaJoin("patientAntparanatalId", "patient_antparanatals")
				),

				// patient and postnatal

				queryInterface.createTable(
					"patient_and_postnatal",
					estructuraTablaJoin("patientAntpostnatalId", "patient_antpostnatals")
				),

				// patient and prenatal

				queryInterface.createTable(
					"patient_and_prenatal",
					estructuraTablaJoin("patientAntprenatalId", "patient_antprenatals")
				),

				// patiente ant familiar

				queryInterface.createTable("patient_antfamiliars", {
					id: {
						type: Sequelize.INTEGER,
						allowNull: false,
						autoIncrement: true,
						primaryKey: true,
					},
					status: { type: Sequelize.CHAR, defaultValue: "a" },

					patientAntFamiliarIncidenciaId: {
						type: Sequelize.INTEGER,
						allowNull: true,
						references: { model: "patient_antfamiliar_incidencia", key: "id" },
					},
					patientAntFamiliarParienteId: {
						type: Sequelize.INTEGER,
						allowNull: true,
						references: { model: "patient_antfamiliar_parientes", key: "id" },
					},

					patientId: {
						type: Sequelize.INTEGER,
						allowNull: true,
						references: { model: "patients", key: "id" },
					},
					createdAt: { type: Sequelize.DATE, allowNull: false },
					updatedAt: { type: Sequelize.DATE, allowNull: false },
				}),

			]);
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				// tablas join
				queryInterface.dropTable("patient_and_antparanatal"),
				queryInterface.dropTable("patient_and_postnatal"),
				queryInterface.dropTable("patient_and_prenatal"),
				queryInterface.dropTable("patient_antfamiliars"),

				// tablas de datos
				queryInterface.dropTable("patient_antfamiliar_incidencia"),
				queryInterface.dropTable("patient_antfamiliar_parientes"),
				queryInterface.dropTable("patient_antparanatals"),
				queryInterface.dropTable("patient_antpostnatals"),
				queryInterface.dropTable("patient_antprenatals"),
			]);
		});
	},
};
