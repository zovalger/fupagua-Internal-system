import axios from "axios";

const url = "/api/eventpost";

export const createEventPostRequest = async (data) => {
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

export const getEventPostsRequest = async (query) =>
	await axios.get(url, { params: query });

export const getEventPostRequest = async (id) =>
	await axios.get(`${url}/${id}`);

export const updateEventPostRequest = async (id, data) => {
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
export const deleteEventPostRequest = async (id) =>
	await axios.delete(`${url}/${id}`);
