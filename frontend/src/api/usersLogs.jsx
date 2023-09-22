import axios from "axios";

const url = "/api/userlogs";

// ***************** consultas	*****************

export const getAllUserLogsRequest = async () => await axios.get(`${url}`);

export const getUserLogs_by_userId_Request = async (id) =>
	await axios.get(`${url}/${id}`);
