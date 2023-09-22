import axios from "axios";

const url = "/api/book_recommended";

export const createBookRecommendedRequest = async (data) =>
	await axios.post(url, data);

export const getBookRecommendedsRequest = async (query) =>
	await axios.get(url, { params: query });

export const getBookRecommendedRequest = async (id) =>
	await axios.get(`${url}/${id}`);

export const getBookRecommendedCategoriesRequest = async () =>
	await axios.get(`${url}/categories`, { params: {} });

export const updateBookRecommendedRequest = async (id, data) =>
	await axios.put(`${url}/${id}`, data);

export const deleteBookRecommendedRequest = async (id) =>
	await axios.delete(`${url}/${id}`);
