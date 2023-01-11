import axios from "axios";

const url = "/api/activity";

export const createActivityRequest = async (data) =>
	await axios.post(url, data);

export const getActivitiesRequest = async () => await axios.get(url);

export const getActivityRequest = async (id) => await axios.get(`${url}/${id}`);

export const deleteActivityRequest = async (id) =>
	await axios.delete(`${url}/${id}`);

export const updateActivityRequest = async (id, data) =>
	await axios.put(`${url}/${id}`, data);
