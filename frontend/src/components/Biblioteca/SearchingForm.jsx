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
	const [type, setType] = useState("book");
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
		req.type = type;

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

	const typeOnChange = ({ target: { value } }) => {
		setType(value);
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
				<div>{!avanzado ? "Buscar" : "Título"}</div>
				<input
					name="title"
					type="text"
					placeholder={!avanzado ? "Buscar" : "Título"}
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
					<option value="title">Título</option>
					<option value="subtitle">Subtítulo</option>
					<option value="description">Descripción</option>
					<option value="cota">Cota</option>
					<option value="autor">Autor</option>
					<option value="materia">Materia</option>
				</select>

				<span>Tipo</span>
				<select name="type" onChange={typeOnChange} value={type}>
					<option value="book">Libro</option>
					<option value="magazine">Revista</option>
					<option value="audiobook">Audiolibro</option>
					<option value="fonoteca">Fonoteca</option>
					<option value="video">Video</option>
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
				<div>Subtítulo</div>
				<input
					name="subtitle"
					type="search"
					placeholder=""
					onChange={onInputChange}
					autoComplete="none"
					value={query.subtitle}
				/>

				<div>Descripción</div>
				<input
					name="description"
					type="search"
					placeholder=""
					onChange={onInputChange}
					autoComplete="none"
					value={query.description}
				/>

				<div>Cota</div>

				<input
					name="cota"
					type="search"
					placeholder=""
					onChange={onInputChange}
					autoComplete="none"
					value={query.cota}
				/>

				<div>Autor</div>

				<input
					name="autor"
					type="search"
					placeholder="autor"
					onChange={onInputChange}
					autoComplete="none"
					value={query.autor}
				/>
				<div>Materia</div>
				<input
					name="materia"
					type="search"
					placeholder=""
					onChange={onInputChange}
					autoComplete="none"
					value={query.materia}
				/>
			</div>

			<button className={styles.btnSearch}>
				<AiOutlineSearch />
			</button>
		</form>
	);
}
