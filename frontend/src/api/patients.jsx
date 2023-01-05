import axios from "axios";

export const getPatientsRequest = async () => await axios.get("/api/patient");

export const getPatientRequest = async (id) =>
	await axios.get("/api/patient/" + id);

// export const deletePostRequest = async (id) =>
// 	await axios.delete("/api/posts/" + id);

export const createPatientRequest = async (data) =>
	await axios.post("/api/patient", data);

// export const updatePostRequest = async (id, newPostFields) => {
// 	const form = new FormData();
// 	for (let key in newPostFields) {
// 		form.append(key, newPostFields[key]);
// 	}
// 	return axios.put("/api/posts/" + id, form, {
// 		headers: {
// 			"Content-Type": "multipart/form-data",
// 		},
// 	});
// };
