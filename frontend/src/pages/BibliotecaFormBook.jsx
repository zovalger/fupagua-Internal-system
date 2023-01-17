import styles from "./styles/BibliotecaFormBook.module.scss";

import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "../components/common/Nav";
import { BiChevronLeft, BiTrash } from "react-icons/bi";

import { useAppData } from "../context/AppContext";
import { useEffect, useState } from "react";
import { toInputDate } from "../utility";

import {
	createBookRequest,
	deleteBookRequest,
	getBookRequest,
	updateBookRequest,
} from "../api/books";
import toast from "react-hot-toast";

export function BibliotecaFormBook({ create }) {
	const navigate = useNavigate();
	const params = useParams();

	const [content, setContent] = useState({
		title: "",
		description: "",
		autor: "",
		editionDate: "",
		city: "",
		editors: "",
		materia: "",
		cota: "",
		height: 0,
		width: 0,
		numberCopies: 1,
		numberPages: 0,
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

		const { editionDate } = content;

		const paylot = content;

		if (!editionDate) paylot.editionDate = undefined;

		const res = create
			? await createBookRequest(paylot)
			: await updateBookRequest(params.id, paylot);

		console.log(res);
		if (res.status === 200) {
			const message = create ? "Nuevo libro añadido" : "cambios guardados";

			toast.success(message);
			navigate("/biblioteca");
		}
	};

	const onInputChange = ({ target: { name, value } }) => {
		console.log(name, value);

		setContent({
			...content,
			[name]: value,
		});
	};

	const deleteBook = async () => {
		try {
			const res = await deleteBookRequest(params.id);

			console.log(res);

			// if (res.status === 404) return toast.error(res.data.message);

			toast.success("libro eliminado");
			// await toast.promise();

			navigate("/biblioteca");
		} catch (error) {
			console.log(error);
			const { response: res } = error;

			if (res.status === 404)
				return toast.error(res.data.message, { duration: 2000 });
		}
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
				title={create ? "Añadir libro" : "Editar libro"}
				rightButtons={
					!create ? (
						<button onClick={deleteBook}>
							<BiTrash />
						</button>
					) : null
				}
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
							required
							autoComplete="none"
						/>
					</label>

					<label>
						descripcion
						<textarea
							onChange={onInputChange}
							name="description"
							cols="30"
							rows="10"
							value={content.description}
							required
							autoComplete="none"
							maxLength={255}
						>
							{/* {content.description ? content.description : ""} */}
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
							autoComplete="none"
						/>
					</label>

					<label>
						editores
						<input
							onChange={onInputChange}
							type="text"
							name="editors"
							value={content.editors}
							autoComplete="none"
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
							autoComplete="none"
						/>
					</label>

					<label>
						altura
						<input
							onChange={onInputChange}
							type="number"
							name="height"
							value={content.height}
							autoComplete="none"
						/>
					</label>

					<label>
						anchura
						<input
							onChange={onInputChange}
							type="number"
							name="width"
							value={content.width}
							autoComplete="none"
						/>
					</label>

					<label>
						numero de ejemplares
						<input
							onChange={onInputChange}
							type="number"
							name="numberCopies"
							value={content.numberCopies}
							autoComplete="none"
						/>
					</label>

					<label>
						numero de paginas
						<input
							onChange={onInputChange}
							type="number"
							name="numberPages"
							value={content.numberPages}
							autoComplete="none"
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
							autoComplete="none"
						/>
					</label>

					<button>Guardar</button>

					<datalist id="autors">
						<option value="gabriel garcia marques" />
						<option value="antonio lobera" />
						<option value="chespirito" />
					</datalist>

					<datalist id="materia">
						<option value="Obras generales" />
						<option value="Filosofía y psicología" />
						<option value="Religión" />
						<option value="Ciencias sociales" />
						<option value="Lenguaje" />
						<option value="Ciencias naturales" />
						<option value="Tecnología y ciencias de la salud" />
						<option value="Arte y deportes " />
						<option value="Literatura" />
						<option value="Geografía e historia" />
					</datalist>

					<datalist id="collection">
						{/* <option value="enciclopedia" />
						<option value="historia universal" />
						<option value="agatha christie" /> */}
					</datalist>
				</form>
			</div>
		</>
	);
}
