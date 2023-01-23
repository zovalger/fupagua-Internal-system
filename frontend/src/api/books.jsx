import axios from "axios";

const url = "/api/book";

export const createBookRequest = async (data) => {
	const form = new FormData();

	for (const key in data) {
		if (Object.hasOwnProperty.call(data, key)) {
			const element = data[key];
			form.append(key, element);
		}
	}
	return await axios.post(url, form, {
		headers: { "Content-Type": "multiplart/form-data" },
	});
};

export const getBooksRequest = async (query) =>
	await axios.get(url, { params: query });

export const getBookRequest = async (id) => await axios.get(`${url}/${id}`);

export const deleteBookRequest = async (id) =>
	await axios.delete(`${url}/${id}`);

export const updateBookRequest = async (id, data) => {
	const form = new FormData();

	for (const key in data) {
		if (Object.hasOwnProperty.call(data, key)) {
			const element = data[key];
			form.append(key, element);
		}
	}

	return await axios.put(`${url}/${id}`, form, {
		headers: { "Content-Type": "multiplart/form-data" },
	});
};
