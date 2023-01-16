import styles from "./styles/BibliotecaAddBook.module.scss";

import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "../components/common/Nav";
import { BiChevronLeft, BiTrash } from "react-icons/bi";

import { useAppData } from "../context/AppContext";
import { useEffect, useState } from "react";
import { toInputDate } from "../utility";

import {
	createBookRequest,
	getBookRequest,
	updateBookRequest,
} from "../api/books";

export function BibliotecaFormBook({ create }) {
	const navigate = useNavigate();
	const params = useParams();

	const [content, setContent] = useState({
		title: "",
		description: "",
		autor: "",
		editionDate: Date.now(),
		city: "",
		editors: "",
		materia: "",
		cota: "",
		height: 0,
		width: 0,
		numberCopies: 1,
		numberPages: 1,
		collection: "",
	});

	useEffect(() => {
		// si estamos en el modo crear no se ejecuta, si no buscamos los datos del registro
		if (create) return;

		const fillInputs = async () => {
			const res = await getBookRequest(params.id);
			// console.log(res);

			const data = res.data;

			const { editionDate } = res.data;

			data.editionDate = toInputDate(new Date(editionDate));

			setContent(data);
		};

		fillInputs();
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();

		// const { title, description } = content;

		const paylot = content;

		const res = create
			? await createBookRequest(paylot)
			: await updateBookRequest(params.id, paylot);

		console.log(res);

		navigate("/biblioteca");
	};

	const onInputChange = ({ target: { name, value } }) => {
		console.log(name, value);
		setContent({
			...content,
			[name]: value,
		});
	};

	return (
		<>
			<Nav
				leftIcon={
					<Link to="/biblioteca">
						<BiChevronLeft />
					</Link>
				}
				// leftFuctionOnClick={toggleAsideActive}
				title={"anadir libro"}
				// rightButtons={
				// 	<button>
				// 		<AiOutlinePlus />
				// 	</button>
				// }
			/>

			<div className={styles.container}>
				<form className={styles.Form} onSubmit={onSubmit}>
					{/* <label>
						imagen
						<input onChange={onInputChange}type="file" name="img" />
					</label> */}

					<label>
						titulo
						<input
							onChange={onInputChange}
							type="text"
							name="title"
							value={content.title}
						/>
					</label>

					<label>
						descripcion
						<textarea
							onChange={onInputChange}
							name="description"
							cols="30"
							rows="10"
						>
							{content.description}
						</textarea>
						{/* <input
							onChange={onInputChange}
							type="text"
							name="description"
							value={content.description}
						/> */}
					</label>

					<label>
						Autor
						<input
							onChange={onInputChange}
							type="text"
							name="autor"
							list="autors"
							value={content.autor}
						/>
					</label>

					<label>
						fecha de edicion
						<input
							onChange={onInputChange}
							type="date"
							name="editionDate"
							value={content.editionDate}
						/>
					</label>

					<label>
						Ciudad
						<input
							onChange={onInputChange}
							type="text"
							name="city"
							value={content.city}
						/>
					</label>

					<label>
						editores
						<input
							onChange={onInputChange}
							type="text"
							name="editors"
							value={content.editors}
						/>
					</label>

					<label>
						materia
						<input
							onChange={onInputChange}
							type="text"
							name="materia"
							list="materia"
							value={content.materia}
						/>
					</label>

					<label>
						Cota
						<input
							onChange={onInputChange}
							type="text"
							name="cota"
							value={content.cota}
						/>
					</label>

					<label>
						altura
						<input
							onChange={onInputChange}
							type="number"
							name="height"
							value={content.height}
						/>
					</label>

					<label>
						anchura
						<input
							onChange={onInputChange}
							type="number"
							name="width"
							value={content.width}
						/>
					</label>

					<label>
						numero de ejemplares
						<input
							onChange={onInputChange}
							type="number"
							name="numberCopies"
							value={content.numberCopies}
						/>
					</label>

					<label>
						numero de paginas
						<input
							onChange={onInputChange}
							type="number"
							name="numberPages"
							value={content.numberPages}
						/>
					</label>

					<label>
						coleccion
						<input
							onChange={onInputChange}
							type="text"
							name="collection"
							list="collection"
							value={content.collection}
						/>
					</label>

					<button>Guardar</button>

					<datalist id="autors">
						<option value="gabriel garcia marques" />
						<option value="antonio lobera" />
						<option value="chespirito" />
					</datalist>

					<datalist id="materia">
						<option value="ciencia" />
						<option value="otra ciencia" />
						<option value="ficcion" />
					</datalist>

					<datalist id="collection">
						<option value="enciclopedia" />
						<option value="historia universal" />
						<option value="agatha christie" />
					</datalist>
				</form>
			</div>
		</>
	);
}
