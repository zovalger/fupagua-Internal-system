import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiTrash } from "react-icons/bi";
import toast from "react-hot-toast";

import styles from "../styles/BibliotecaFormBook.module.scss";
import Nav from "../../components/common/Nav";
import { updateBookFichaRequest } from "../../api/booksFichas";
import {
	createBookRequest,
	deleteBookRequest,
	getBookRequest,
	updateBookRequest,
} from "../../api/books";
import FormBook from "../../components/Biblioteca/FormBook";
import BookImageSlider from "../../components/Biblioteca/BookImageSlider";

// import { useAppData } from "../context/AppContext";
// import { toInputDate } from "../utility";

export function BibliotecaFormBook({ create }) {
	const navigate = useNavigate();
	const params = useParams();

	const [book, setBookData] = useState({
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
		type: "book",
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
		await updateBookRequest(params.id, book);

		await fichaData.map(
			async (ficha) => await updateBookFichaRequest(ficha.id, ficha)
		);
	};

	const onSubmit = async (e, v) => {
		e.preventDefault();
		if (isSubmiting) return;

		setIsSubmitin(true);

		try {
			const myPromise = create ? createBookRequest(book) : savePutDataBook();

			console.log(myPromise);

			toast.promise(myPromise, {
				loading: "guardando",
				success: (res) => {
					console.log(res);

					setTimeout(() => {
						navigate("/biblioteca");
					}, 500);
					return create ? "Nuevo libro añadido" : "cambios guardados";
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
			...book,
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
				title={create ? "Añadir libro" : "Editar libro"}
				// rightButtons={

				// }
			/>

			<div className={styles.container + ` scrollInSpacework`}>
				<div className="container pt-3 ">
					<div className="row">
						<div className="col-sm-12 col-lg-4">
							<div className="d-flex  justify-content-center w-100">
								{!create ? <BookImageSlider book={book} /> : null}
							</div>
						</div>
						<div className="col-sm-12 col-lg-8">
							<FormBook
								bookData={book}
								fichaData={fichaData}
								create={create}
								onSubmit={onSubmit}
								onInputChange={onInputChange}
								setBookData={setBookData}
								onInputFichaChange={onInputFichaChange}
								deleteBook={deleteBook}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
