import axios from "axios";

const url = "/api/book";

export const createBookRequest = async (data) => await axios.post(url, data);

export const getBooksRequest = async (query) =>
	await axios.get(url, { params: query });

export const getBookRequest = async (id) => await axios.get(`${url}/${id}`);

export const deleteBookRequest = async (id) =>
	await axios.delete(`${url}/${id}`);

export const updateBookRequest = async (id, data) =>
	await axios.put(`${url}/${id}`, data);
