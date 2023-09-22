import axios from "axios";

const url = "/api/address";

export const getAllEstadosRequest = async () =>
	await axios.get(`${url}/estados`);

export const getAllMunicipios_by_Estado_Request = async (id_estado) =>
	await axios.get(`${url}/estados/${id_estado}/municipios`);

	export const getAllParroquias_by_Municipio_Request = async (id_municipio) =>
		await axios.get(`${url}/municipios/${id_municipio}/parroquias`);
		
export const getAllCiudades_by_Estado_Request = async (id_estado) =>
	await axios.get(`${url}/estados/${id_estado}/ciudades`);

