const Activity = require("../models/Activity.model");

// Activity

const createActivity = async (req, res) => {
	const { title, description, dateStart, dateEnd, status } = req.body;

	try {
		const activity = await Activity.create({
			title,
			description,
			dateStart,
			dateEnd,
			status,
		});

		return res.json(activity);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const getActivitys = async (req, res) => {
	// const { name, ci } = req.query;

	// const where = {};

	// if (name) where.name = { [Op.substring]: name };
	// if (ci) where.ci = { [Op.substring]: ci };

	try {
		const activity = await Activity.findAll({
			// where,
		});
		return res.json(activity);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const getActivity = async (req, res) => {
	const { id } = req.params;

	try {
		const activity = await Activity.findByPk(id);

		if (!activity)
			return res.status(404).json({ message: "Activity no found" });

		res.json(activity);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const updateActivity = async (req, res) => {
	const { id } = req.params;

	try {
		const activity = await Activity.findByPk(id);

		await activity.update(req.body);

		return res.json(activity);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};
const deleteActivity = async (req, res) => {
	const { id } = req.params;

	try {
		const activity = await Activity.findByPk(id);

		console.log(await activity.destroy());

		res.send("a Activity move to trash");
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

module.exports = {
	createActivity,
	getActivitys,
	getActivity,
	updateActivity,
	deleteActivity,
};
