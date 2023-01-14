import styles from "./styles/BibliotecaAddBook.module.scss";

import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/common/Nav";
import { BiChevronLeft, BiTrash } from "react-icons/bi";

import { useAppData } from "../context/AppContext";
import { useState } from "react";

export function BibliotecaAddBook({ create }) {
	const { toggleAsideActive } = useAppData();
	const navigate = useNavigate();

	const [content, setContent] = useState({
		title: "",
		description: "",
		autor: "",
		editionDate: "",
		city: "",
		editors: "",
		materia: "",
		cota: "",
		height: "",
		width: "",
		numberCopies: "",
		numberPages: "",
		collection: "",
	});

	const onSubmit = async (e) => {
		e.preventDefault();

		const { title, description } = content,
			paylot = content;

		const res = create;
		// ? await createActivityRequest(paylot)
		// : await updateActivityRequest(params.id, paylot);

		console.log(res);

		// navigate("/biblioteca");
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
						<input onInputChange={onInputChange}type="file" name="img" />
					</label> */}

					<label>
						titulo
						<input onInputChange={onInputChange} type="text" name="title" />
					</label>

					<label>
						descripcion
						<input
							onInputChange={onInputChange}
							type="text"
							name="description"
						/>
					</label>

					<label>
						Autor
						<input
							onInputChange={onInputChange}
							type="text"
							name="autor"
							list="autors"
						/>
					</label>

					<label>
						fecha de edicion
						<input
							onInputChange={onInputChange}
							type="date"
							name="editionDate"
						/>
					</label>

					<label>
						Ciudad
						<input onInputChange={onInputChange} type="text" name="city" />
					</label>

					<label>
						editores
						<input onInputChange={onInputChange} type="text" name="editors" />
					</label>

					<label>
						materia
						<input
							onInputChange={onInputChange}
							type="text"
							name="materia"
							list="materia"
						/>
					</label>

					<label>
						Cota
						<input onInputChange={onInputChange} type="text" name="cota" />
					</label>

					<label>
						altura
						<input onInputChange={onInputChange} type="number" name="height" />
					</label>

					<label>
						anchura
						<input onInputChange={onInputChange} type="number" name="width" />
					</label>

					<label>
						numero de ejemplares
						<input
							onInputChange={onInputChange}
							type="number"
							name="numberCopies"
						/>
					</label>

					<label>
						numero de paginas
						<input
							onInputChange={onInputChange}
							type="number"
							name="numberPages"
						/>
					</label>

					<label>
						coleccion
						<input
							onInputChange={onInputChange}
							type="text"
							name="collection"
							list="collection"
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
