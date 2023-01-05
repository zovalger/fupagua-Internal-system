import axios from "axios";

export const getRepresentativeRequest = async () =>
	await axios.get("/api/representative");

export const getRepresentativesRequest = async (id) =>
	await axios.get("/api/representative/" + id);

// export const deletePostRequest = async (id) =>
// 	await axios.delete("/api/posts/" + id);

export const createRepresentativeRequest = async (data) =>
	await axios.post("/api/representative", data);

export const jointRepresentativeWithPatient = async (id, patientId) =>
	await axios.put(`/api/${id}/join-to/${patientId}`, {});

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
