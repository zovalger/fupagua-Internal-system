import axios from "axios";

const url = "/api/patient";

export const createPatientRequest = async (data) => await axios.post(url, data);

// {
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

export const getPatientsRequest = async (query) =>
	await axios.get(url, { params: query });

export const getPatientRequest = async (id) => await axios.get(`${url}/${id}`);

export const deletePatientRequest = async (id) =>
	await axios.delete(`${url}/${id}`);

export const updatePatientRequest = async (id, data) => {
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
