import axios from "axios";

const url = "/api/utility";

export const consultCI = async (query) =>
	await axios.get(`${url}/consult-ci`, { params: query });
