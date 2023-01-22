import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./SearchingForm.module.scss";

export default function SearchingForm({ getListOfBooks }) {
	const [query, setQuery] = useState({ title: "" });
	const [avanzado, setAvanzado] = useState(true);

	const onsubmit = (e) => {
		e.preventDefault();

		const req = {};

		if (avanzado) {
			console.log(avanzado);
			for (const key in query) {
				if (Object.hasOwnProperty.call(query, key)) {
					const valor = query[key];
					if (valor) req[key] = valor;
				}
			}
		} else {
			req.title = query.title;
			req.description = query.title;
			req.subtitle = query.title;
			req.or = true;
		}
		console.log(req);

		getListOfBooks(req);
	};

	const onInputChange = ({ target: { name, value } }) => {
		// if (value.length <= 0) setInQuery(false);

		console.log(name, value);
		setQuery({
			...query,
			[name]: value,
		});
	};

	const InputLabel = ({ name, placeholder, value }) => (
		<label>
			{placeholder}
			<input
				name={name}
				type="text"
				placeholder={placeholder}
				onChange={onInputChange}
				autoComplete="none"
				value={value}
			/>
		</label>
	);

	const AvanzadeMode = () => {
		setAvanzado(!avanzado);
		console.log(!avanzado ? "busqueda avanzada activada" : "busqueda simple");
	};
	const ascDESC = () => {
		setAvanzado(!avanzado);
		console.log(!avanzado ? "busqueda avanzada activada" : "busqueda simple");
	};

	return (
		<form className={styles.searchForm} onSubmit={onsubmit}>
			<input
				name="title"
				type="search"
				placeholder="buscar / subtitulo"
				onChange={onInputChange}
				autoComplete="none"
			/>
			<button type="button" onClick={AvanzadeMode}>
				busqueda avanzada
			</button>

			<select name="sortBy" onChange={onInputChange}>
				<option value="title">titulo</option>
				<option value="subtitle">subtitulo</option>
				<option value="description">descripcion</option>
				<option value="cota">cota</option>
				<option value="autor">autor</option>
			</select>
			{/* <button type="button" onClick={ascDesc}></button> */}

			<input
				name="subtitle"
				type="search"
				placeholder="subtitle"
				onChange={onInputChange}
				autoComplete="none"
			/>
			<input
				name="description"
				type="search"
				placeholder="description"
				onChange={onInputChange}
				autoComplete="none"
			/>
			<input
				name="cota"
				type="search"
				placeholder="cota"
				onChange={onInputChange}
				autoComplete="none"
			/>
			<input
				name="autor"
				type="search"
				placeholder="autor"
				onChange={onInputChange}
				autoComplete="none"
			/>

			<button>
				<AiOutlineSearch />
			</button>
		</form>
	);
}
