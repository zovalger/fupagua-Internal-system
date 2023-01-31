import { useState } from "react";
import {
	AiOutlineSearch,
	AiOutlineSortAscending,
	AiOutlineSortDescending,
	AiOutlineClose,
	AiFillCaretUp,
	AiFillCaretDown,
} from "react-icons/ai";

import styles from "./SearchingForm.module.scss";

export default function SearchingForm({ getListOfBooks, cancelQuery }) {
	const [query, setQuery] = useState({ title: "" });

	const [avanzado, setAvanzado] = useState(false);
	const [direction, setDirection] = useState("ASC");
	const [sortBy, setSortBy] = useState("title");

	// console.log(avanzado);
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
			req.cota = query.title;
			req.autor = query.title;
			req.materia = query.title;
			req.observations = query.observations;

			req.or = true;
		}

		req.sortBy = sortBy;
		req.direction = direction;

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

	const AvanzadeMode = () => {
		setAvanzado(!avanzado);
		console.log(!avanzado ? "busqueda avanzada activada" : "busqueda simple");
	};
	const ascDESC = () => {
		setDirection(direction === "ASC" ? "DESC" : "ASC");
	};

	const SortByOnChange = ({ target: { value } }) => {
		setSortBy(value);
	};

	const dropQuery = () => {
		const q = {};

		for (const key in query) {
			if (Object.hasOwnProperty.call(query, key)) {
				// const valor = query[key];
				q[key] = "";
			}
		}

		setQuery(q);

		cancelQuery();
	};

	return (
		<form className={styles.container} onSubmit={onsubmit}>
			<div>
				<div>{!avanzado ? "buscar" : "titulo"}</div>
				<input
					name="title"
					type="text"
					placeholder={!avanzado ? "buscar" : "titulo"}
					onChange={onInputChange}
					autoComplete="none"
					value={query.title}
				/>
				<button type="button" onClick={dropQuery}>
					<AiOutlineClose />
				</button>
			</div>

			<div className={styles.sort}>
				<span>Ordenar por</span>

				<select name="sortBy" onChange={SortByOnChange} value={sortBy}>
					<option value="title">titulo</option>
					<option value="subtitle">subtitulo</option>
					<option value="description">descripcion</option>
					<option value="cota">cota</option>
					<option value="autor">autor</option>
					<option value="materia">materia</option>
				</select>

				<button type="button" onClick={ascDESC}>
					{direction === "ASC" ? (
						<AiOutlineSortAscending />
					) : (
						<AiOutlineSortDescending />
					)}
				</button>

				<button type="button" onClick={AvanzadeMode}>
					{avanzado ? <AiFillCaretDown /> : <AiFillCaretUp />}
				</button>
			</div>

			<div
				className={`${styles.extraInputs} ${!avanzado ? "" : styles.active}`}
			>
				<div>subtitulo</div>
				<input
					name="subtitle"
					type="search"
					placeholder="subtitle"
					onChange={onInputChange}
					autoComplete="none"
					value={query.subtitle}
				/>

				<div>descripcion</div>
				<input
					name="description"
					type="search"
					placeholder="description"
					onChange={onInputChange}
					autoComplete="none"
					value={query.description}
				/>

				<div>cota</div>

				<input
					name="cota"
					type="search"
					placeholder="cota"
					onChange={onInputChange}
					autoComplete="none"
					value={query.cota}
				/>

				<div>autor</div>

				<input
					name="autor"
					type="search"
					placeholder="autor"
					onChange={onInputChange}
					autoComplete="none"
					value={query.autor}
				/>
				<div>materia</div>
				<input
					name="materia"
					type="search"
					placeholder="materia"
					onChange={onInputChange}
					autoComplete="none"
					value={query.subtitle}
				/>
			</div>

			<button className={styles.btnSearch}>
				<AiOutlineSearch />
			</button>
		</form>
	);
}
