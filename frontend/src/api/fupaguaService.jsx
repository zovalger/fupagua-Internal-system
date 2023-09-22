import axios from "axios";

const url = "/api/fupaguaservice";

export const createFupaguaServiceRequest = async (data) => {
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

export const getFupaguaServicesRequest = async (query) =>
	await axios.get(url, { params: query });

export const getFupaguaServiceRequest = async (id) =>
	await axios.get(`${url}/${id}`);

export const updateFupaguaServiceRequest = async (id, data) => {
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
export const deleteFupaguaServiceRequest = async (id) =>
	await axios.delete(`${url}/${id}`);
