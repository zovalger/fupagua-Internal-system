const express = require("express");
const router = express.Router();

const {
	consultCI_in_DB,
	consultCI_in_CNE,
	getIpServer_controller,
} = require("../controllers/utility.route.controller");
const { consultCIValidator } = require("../validators/consultCIValidator");
const { authUser } = require("../middleware/authUser");

router.get(
	"/consult-ci",
	authUser,
	consultCIValidator,
	consultCI_in_DB,
	consultCI_in_CNE
);

router.get("/ip-server", getIpServer_controller);

module.exports = router;
