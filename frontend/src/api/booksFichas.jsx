import axios from "axios";

const url = "/api/bookficha";

// export const createBookRequest = async (data) => {
// 	const form = new FormData();

// 	for (const key in data) {
// 		if (Object.hasOwnProperty.call(data, key)) {
// 			const element = data[key];
// 			form.append(key, element);
// 		}
// 	}
// 	return await axios.post(url, form, {
// 		headers: { "Content-Type": "multiplart/form-data" },
// 	});
// };

export const getBookFichasRequest = async (query) =>
	await axios.get(url, { params: query });

export const getBookFichaRequest = async (id) =>
	await axios.get(`${url}/${id}`);

// export const deleteBookFichaRequest = async (id) =>
// 	await axios.delete(`${url}/${id}`);

export const updateBookFichaRequest = async (id, data) =>
	await axios.put(`${url}/${id}`, data);
