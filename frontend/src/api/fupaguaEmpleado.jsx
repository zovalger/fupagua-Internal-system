import axios from "axios";

const url = "/api/fupaguaempleados";

export const createFupaguaEmpleadoRequest = async (data) => {
	console.log(data);
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

export const getFupaguaEmpleadosRequest = async (query) =>
	await axios.get(url, { params: query });

export const getFupaguaEmpleadoRequest = async (id) =>
	await axios.get(`${url}/${id}`);

export const updateFupaguaEmpleadoRequest = async (id, data) => {
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
export const deleteFupaguaEmpleadoRequest = async (id) =>
	await axios.delete(`${url}/${id}`);
