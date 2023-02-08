const express = require("express");
const router = express.Router();

const { consultCI } = require("../controllers/utility.route.controller");

router.get("/consult-ci", consultCI);

module.exports = router;
