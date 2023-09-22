import { useEffect, useState } from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import {
	getAllCiudades_by_Estado_Request,
	getAllEstadosRequest,
	getAllMunicipios_by_Estado_Request,
	getAllParroquias_by_Municipio_Request,
} from "../../api/addressVenezuela";

export const AddressInputs = ({ onHanddleChange, value, search }) => {
	const formateSetState = (v) => {
		return v
			? typeof v === "string"
				? {
						id_estado: "null",
						id_municipio: "null",
						id_parroquia: "null",
						id_ciudad: "null",
						dir: v,
				  }
				: v
			: {
					id_estado: "null",
					id_municipio: "null",
					id_parroquia: "null",
					id_ciudad: "null",
					dir: "",
			  };
	};

	const [states, setStates] = useState(formateSetState(value));

	const [addressAutocomplete, setAddressAutocomplete] = useState({
		estados: [],
		municipios: [],
		parroquitas: [],
		ciudades: [],
	});

	useEffect(() => {
		getAllEstadosRequest().then(async ({ data: estados }) => {
			let data = {
				estados,
				municipios: [],
				ciudades: [],
				parroquitas: [],
			};

			if (value.id_estado) {
				const { data: municipios } = await getAllMunicipios_by_Estado_Request(
					value.id_estado
				);
				const { data: parroquitas } =
					await getAllParroquias_by_Municipio_Request(value.id_municipio);
				const { data: ciudades } = await getAllCiudades_by_Estado_Request(
					value.id_estado
				);

				data = { ...data, municipios, ciudades, parroquitas };
			}

			setAddressAutocomplete({ ...addressAutocomplete, ...data });

			setStates(formateSetState(value));
		});
	}, [value]);

	const change = (value) => {
		// const newState = { ...states, [name]: value };
		// setStates(newState);
		onHanddleChange(value);
	};

	return (
		<Row>
			<Col md={6} sm={6}>
				<FormGroup>
					<Label for="id_estado">Estado</Label>
					<Input
						id="id_estado"
						name="id_estado"
						type="select"
						onChange={({ target: { name, value } }) => {
							const newState = {
								...states,
								[name]: value,
								id_municipio: "null",
								id_parroquia: "null",
								id_ciudad: "null",
							};

							setStates(newState);
							change(newState);

							getAllMunicipios_by_Estado_Request(value).then(({ data }) =>
								getAllCiudades_by_Estado_Request(value).then(
									({ data: data2 }) =>
										setAddressAutocomplete({
											...addressAutocomplete,
											municipios: data,
											ciudades: data2,
										})
								)
							);
						}}
						value={states.id_estado}
					>
						<option value="null">Seleccione estado</option>
						{addressAutocomplete.estados.map((e) => (
							<option key={e.id_estado} value={e.id_estado}>
								{e.estado}
							</option>
						))}
					</Input>
				</FormGroup>
			</Col>
			<Col md={6} sm={6}>
				<FormGroup>
					<Label for="id_municipio">Municipio</Label>
					<Input
						id="id_municipio"
						name="id_municipio"
						type="select"
						disabled={states.id_estado === "null"}
						onChange={({ target: { name, value } }) => {
							const newState = {
								...states,
								[name]: value,
								id_parroquia: "null",
							};

							setStates(newState);
							change(newState);
							getAllParroquias_by_Municipio_Request(value).then(({ data }) =>
								setAddressAutocomplete({
									...addressAutocomplete,
									parroquitas: data,
								})
							);
						}}
						value={states.id_municipio}
					>
						<option value="null">Seleccione municipio</option>
						{addressAutocomplete.municipios.map((m) => (
							<option key={m.id_municipio} value={m.id_municipio}>
								{m.municipio}
							</option>
						))}
					</Input>
				</FormGroup>
			</Col>
			<Col md={6} sm={6}>
				<FormGroup>
					<Label for="id_parroquia">Parroquia</Label>
					<Input
						id="id_parroquia"
						name="id_parroquia"
						type="select"
						disabled={states.id_municipio === "null"}
						onChange={({ target: { name, value } }) => {
							const newState = {
								...states,
								[name]: value,
							};

							setStates(newState);
							change(newState);
						}}
						value={states.id_parroquia}
					>
						<option value="null">Seleccione parroquia</option>
						{addressAutocomplete.parroquitas.map((e) => (
							<option key={e.id_parroquia} value={e.id_parroquia}>
								{e.parroquia}
							</option>
						))}
					</Input>
				</FormGroup>
			</Col>

			<Col md={6} sm={6}>
				<FormGroup>
					<Label for="id_ciudad">Ciudad</Label>
					<Input
						id="id_ciudad"
						name="id_ciudad"
						type="select"
						disabled={states.id_parroquia === "null"}
						onChange={({ target: { name, value } }) => {
							const newState = {
								...states,
								[name]: value,
							};

							setStates(newState);
							change(newState);
						}}
						value={states.id_ciudad}
					>
						<option value="null">Seleccione ciudad</option>
						{addressAutocomplete.ciudades.map((e) => (
							<option key={e.id_ciudad} value={e.id_ciudad}>
								{e.ciudad}
							</option>
						))}
					</Input>
				</FormGroup>
			</Col>

			{!search && (
				<Col md={12} sm={12}>
					<FormGroup>
						<Label for="dir">Direccion</Label>
						<Input
							id="dir"
							name="dir"
							onChange={({ target: { name, value } }) => {
								const newState = {
									...states,
									[name]: value,
								};

								setStates(newState);
								change(newState);
							}}
							value={states.dir}
						/>
					</FormGroup>
				</Col>
			)}
		</Row>
	);
};
