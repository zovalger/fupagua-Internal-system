import axios from "axios";

const url = "/api/videolink";

export const createVideoLinkRequest = async (data) =>
	await axios.post(url, data);

export const getVideoLinksRequest = async (query) =>
	await axios.get(url, { params: query });

export const getVideoLinkRequest = async (id) =>
	await axios.get(`${url}/${id}`);

export const getVideoLinkCategoriesRequest = async () =>
	await axios.get(`${url}/categories`, { params: {} });

export const updateVideoLinkRequest = async (id, data) =>
	await axios.put(`${url}/${id}`, data);

export const deleteVideoLinkRequest = async (id) =>
	await axios.delete(`${url}/${id}`);
