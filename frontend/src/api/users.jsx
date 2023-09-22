import axios from "axios";

const url = "/api/user";

// ***************** consultas	*****************

export const getAllUsersRequest = async () => await axios.get(`${url}`);

export const getUsersBySearchRequest = async (query) =>
	await axios.get(`${url}/search`, { params: query });

export const getUserRequest = async (id) => await axios.get(`${url}/${id}`);

export const getUserLogoutTimeRequest = async (id) =>
	await axios.get(`${url}/${id}/logout-time`);

// ***************** modificaciones	*****************

export const createUserRequest = async (data) => await axios.post(url, data);

export const updateUserRequest = async (id, data) =>
	await axios.put(`${url}/${id}`, data);
