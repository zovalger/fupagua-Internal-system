const { serialize } = require("cookie");
const { SECRET_WORD, LOGOUT_TIME } = require("../config");
const { sign } = require("jsonwebtoken");

const createTokenAndCookie = (userJSON) => {
	const expiration_time = Math.floor(Date.now() / 1000) + 60 * LOGOUT_TIME;
	const expirationCookie_time = new Date(Date.now() + 1000 * 60 * LOGOUT_TIME);

	const token = sign({ ...userJSON, exp: expiration_time }, SECRET_WORD);

	const serialized = serialize("authCookie", token, {
		httpOnly: true,
		secure: false,
		// secure: process.env.NODE_ENV === "production",
		sameSite: true,
		maxAge: expirationCookie_time,
		path: "/",
	});

	return serialized;
};

module.exports = { createTokenAndCookie };
