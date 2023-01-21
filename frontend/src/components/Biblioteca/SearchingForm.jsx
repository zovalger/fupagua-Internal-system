import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./SearchingForm.module.scss";

export default function SearchingForm({ getListOfBooks }) {
	const [query, setQuery] = useState({ title: "" });
	const [avanzado, setAvanzado] = useState(true);

	const onsubmit = (e) => {
		e.preventDefault();

		const req = {};

		for (const key in query) {
			if (Object.hasOwnProperty.call(query, key)) {
				const valor = query[key];

				if (valor) req[key] = valor;
			}
		}

		if (!avanzado) req.or = true;

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

	return (
		<form className={styles.searchForm} onSubmit={onsubmit}>
			<input
				name="title"
				type="search"
				placeholder="buscar"
				onChange={onInputChange}
				autoComplete="none"
			/>

			<button>
				<AiOutlineSearch />
			</button>
		</form>
	);
}
