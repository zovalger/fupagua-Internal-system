import styles from "./styles/BibliotecaFormBook.module.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
import { updateBookFichaRequest } from "../api/booksFichas";

export function BibliotecaFormBook({ create }) {
	const navigate = useNavigate();
	const params = useParams();

	const [bookData, setBookData] = useState({
		title: "",
		subtitle: "",
		description: "",
		autor: "",
		cota: "",
		editionDate: 1900,
		city: "",
		editors: "",
		materia: "",
		height: 0,

		typeAdquisition: "",
		observations: "",
		collection: "",

		numberCopies: 1,
		numberPages: 1,
		img: "",
	});

	const [fichaData, setFichaData] = useState([]);

	const [isSubmiting, setIsSubmitin] = useState(false);

	useEffect(() => {
		// si estamos en el modo crear no se ejecuta, si no buscamos los datos del registro
		if (create) return;

		const fillInputs = async () => {
			const res = await getBookRequest(params.id);

			setBookData(res.data);
			setFichaData(res.data.bookfichas);
		};

		fillInputs();
	}, []);

	const savePutDataBook = async () => {
		await updateBookRequest(params.id, bookData);

		await fichaData.map(
			async (ficha) => await updateBookFichaRequest(ficha.id, ficha)
		);
	};

	const onSubmit = async (e, v) => {
		e.preventDefault();
		if (isSubmiting) return;

		setIsSubmitin(true);

		try {
			const myPromise = create
				? createBookRequest(bookData)
				: savePutDataBook();

			console.log(myPromise);

			toast.promise(myPromise, {
				loading: "guardando",
				success: (res) => {
					console.log(res);

					setTimeout(() => {
						navigate("/biblioteca");
					}, 500);
					return create ? "Nuevo libro a??adido" : "cambios guardados";
				},
				error: (err) => {
					setIsSubmitin(false);
					return `This just happened: ${err.toString()}`;
				},
			});
		} catch (error) {
			setIsSubmitin(false);
			console.log(error);
		}
	};

	const onInputChange = ({ target: { name, value } }) => {
		console.log(name, value);

		setBookData({
			...bookData,
			[name]: value,
		});
	};

	const onInputFichaChange = ({ target: { name, checked } }) =>
		setFichaData(
			fichaData.map((ficha) => {
				if (ficha.id.toString() === name) {
					ficha.printed = !ficha.printed;
				}

				return ficha;
			})
		);

	const deleteBook = async () => {
		if (!window.confirm("Seguro que quiere eliminar el libro?")) return;

		try {
			// const d = confirm("esta seguro de elminar el libro?");

			const myPromise = deleteBookRequest(params.id);

			toast.promise(myPromise, {
				loading: "eliminando",
				success: (res) => {
					console.log(res);
					setTimeout(() => {
						navigate("/biblioteca");
					}, 1000);
					// navigate("/biblioteca");
					return "libro eliminado";
				},
				error: (err) => `This just happened: ${err.toString()}`,
			});
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
					<button
						onClick={() => {
							if (
								window.confirm(
									"seguro que quiere salir? se perderan todos los cambios realizados"
								)
							)
								navigate("/biblioteca");
						}}
					>
						<BiChevronLeft />
					</button>
				}
				// leftFuctionOnClick={toggleAsideActive}
				title={create ? "A??adir libro" : "Editar libro"}
				// rightButtons={

				// }
			/>

			<div className={styles.container}>
				<Form onSubmit={onSubmit}>
					{bookData.img_cloudinary_url ? (
						<div>
							<img src={bookData.img_cloudinary_url} alt="" />
						</div>
					) : (
						""
					)}
					<Form.Group className="my-3" controlId="formBasicEmail">
						<Form.Label>Tipo</Form.Label>

						<Form.Select
							onChange={onInputChange}
							name="type"
							value={bookData.type}
						>
							<option value="book">Libro</option>
							<option value="magazine">Revista</option>
							<option value="audiobook">Audiolibro</option>
							<option value="fonoteca">Fonoteca</option>
							<option value="video">Video</option>
						</Form.Select>
					</Form.Group>

					<Form.Group controlId="formFile" className="my-3">
						<Form.Label>Imagen de portada</Form.Label>
						<Form.Control
							type="file"
							onChange={(e) => {
								setBookData({ ...bookData, img: e.target.files[0] });
								// onInputChange
							}}
							name="img"
							accept="image/*"
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Titulo</Form.Label>
						<Form.Control
							onChange={onInputChange}
							type="text"
							name="title"
							value={bookData.title}
							required
							autoComplete="none"
						/>
					</Form.Group>

					{bookData.type === "audiobook" || bookData.type === "book" ? (
						<>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Subtitulo</Form.Label>
								<Form.Control
									onChange={onInputChange}
									type="text"
									name="subtitle"
									value={bookData.subtitle}
									autoComplete="none"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Autor</Form.Label>
								<Form.Control
									onChange={onInputChange}
									type="text"
									name="autor"
									list="autors"
									value={bookData.autor}
								/>
							</Form.Group>
						</>
					) : (
						""
					)}

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>
							{bookData.type !== "book" || bookData.type !== "audiobook"
								? "Numero"
								: "Cota"}
						</Form.Label>
						<Form.Control
							onChange={onInputChange}
							type="text"
							name="cota"
							value={bookData.cota}
							autoComplete="none"
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>
							{bookData.type !== "book" || bookData.type !== "audiobook"
								? "Fecha"
								: " Fecha de edicion"}
						</Form.Label>
						<Form.Control
							onChange={onInputChange}
							type="number"
							name="editionDate"
							value={bookData.editionDate}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Materia</Form.Label>
						<Form.Control
							onChange={onInputChange}
							type="text"
							name="materia"
							list="materia"
							value={bookData.materia}
						/>
					</Form.Group>

					{bookData.type === "audiobook" || bookData.type === "book" ? (
						<>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Ciudad</Form.Label>
								<Form.Control
									onChange={onInputChange}
									type="text"
									name="city"
									value={bookData.city}
									autoComplete="none"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Editores</Form.Label>
								<Form.Control
									onChange={onInputChange}
									type="text"
									name="editors"
									value={bookData.editors}
									autoComplete="none"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Altura</Form.Label>
								<Form.Control
									onChange={onInputChange}
									type="number"
									name="height"
									value={bookData.height}
									autoComplete="none"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label> Numero de paginas</Form.Label>
								<Form.Control
									onChange={onInputChange}
									type="number"
									name="numberPages"
									value={bookData.numberPages}
									autoComplete="none"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label> Numero de ejemplares</Form.Label>
								<Form.Control
									onChange={onInputChange}
									type="number"
									name="numberCopies"
									value={bookData.numberCopies}
									autoComplete="none"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Tipo adquisici??n</Form.Label>
								<Form.Control
									onChange={onInputChange}
									type="text"
									name="typeAdquisition"
									value={bookData.typeAdquisition}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Coleccion</Form.Label>
								<Form.Control
									onChange={onInputChange}
									type="text"
									name="collection"
									list="collection"
									value={bookData.collection}
									autoComplete="none"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Observaciones</Form.Label>
								<Form.Control
									onChange={onInputChange}
									type="text"
									name="observations"
									value={bookData.observations}
								/>
							</Form.Group>
						</>
					) : (
						""
					)}

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Descripcion</Form.Label>
						<Form.Control
							onChange={onInputChange}
							name="description"
							// cols="30"
							rows="10"
							value={bookData.description}
							autoComplete="none"
							maxLength={500}
							as="textarea"
						/>
					</Form.Group>

					{bookData.type === "audiobook" || bookData.type === "book" ? (
						<>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Fichas Impresas</Form.Label>

								{fichaData.length > 0
									? fichaData.map((ficha) => (
											<Form.Check
												onChange={onInputFichaChange}
												name={ficha.id}
												checked={ficha.printed}
												label={
													ficha.typeFicha === "title"
														? "titulo"
														: ficha.typeFicha
												}
											/>
									  ))
									: null}

								{/* {bookData.bookfichas.map((ficha) => (
							
						))} */}
							</Form.Group>
						</>
					) : (
						""
					)}

					{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group> */}
					<Button variant="primary" type="submit" className="w-100">
						Guardar
					</Button>

					{!create ? (
						<Button
							variant="danger"
							type="button"
							onClick={deleteBook}
							className="w-100 mt-3"
						>
							<BiTrash />
						</Button>
					) : null}
				</Form>

				<form className={styles.Form} onSubmit={onSubmit} method="post">
					<datalist id="autors">
						<option value="gabriel garcia marques" />
						<option value="antonio lobera" />
						<option value="chespirito" />
					</datalist>

					<datalist id="materia">
						<option value="Obras generales" />
						<option value="Filosof??a y psicolog??a" />
						<option value="Religi??n" />
						<option value="Ciencias sociales" />
						<option value="Lenguaje" />
						<option value="Ciencias naturales" />
						<option value="Tecnolog??a y ciencias de la salud" />
						<option value="Arte y deportes " />
						<option value="Literatura" />
						<option value="Geograf??a e historia" />
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
