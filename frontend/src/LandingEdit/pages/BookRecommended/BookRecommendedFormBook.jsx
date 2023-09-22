import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import toast from "react-hot-toast";

import Nav from "../../../UI/components/Nav";

import { FormBookRecommended } from "../../components//BookRecommended/FormBookRecommended";
import {
	createBookRecommendedRequest,
	deleteBookRecommendedRequest,
	getBookRecommendedCategoriesRequest,
	getBookRecommendedRequest,
	updateBookRecommendedRequest,
} from "../../../api/bookRecommended";
import { BookRecommendedSelectBook } from "../../components/BookRecommended/BookRecommendedSelectBook";

export function BookRecommendedFormBook({ create }) {
	const navigate = useNavigate();
	const params = useParams();

	// datos principales
	const [data, setData] = useState({});
	const [book, setBook] = useState({});
	const [categoryData, setCategoryData] = useState("");

	// datos logicos
	const [isSubmiting, setIsSubmitin] = useState(false);
	const [categoriesList, setCategoriesList] = useState([]);
	const [selectingBook, setSelectingBook] = useState(false);

	const getData = async () => {
		const res = await getBookRecommendedRequest(params.id);
		console.log(res);

		const { book, bookrecommendedcategory } = res.data;

		// setData({ title, description, url });

		setBook(book);
		setCategoryData(bookrecommendedcategory.title);
	};

	useEffect(() => {
		// si estamos en el modo crear no se ejecuta, si no buscamos los datos del registro
		(async () => {
			const resCategoriesList = await getBookRecommendedCategoriesRequest();
			console.log(resCategoriesList);
			setCategoriesList(
				resCategoriesList.data.map((c) => (c ? c.title : null))
			);
		})();

		if (create) return;

		getData();
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		if (isSubmiting) return;
		setIsSubmitin(true);

		const body = {};

		body.bookId = book.id;
		body.category = categoryData;

		try {
			const myPromise = create
				? createBookRecommendedRequest(body)
				: updateBookRecommendedRequest(params.id, body);

			console.log(myPromise);

			toast.promise(myPromise, {
				loading: "guardando",
				success: (res) => {
					console.log(res);

					setTimeout(() => {
						navigate("/landing-edit/libros_recomendados");
					}, 500);

					return create ? "Añadido correctamente" : "cambios guardados";
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

	const deleteItem = async () => {
		if (!window.confirm("Seguro que quiere eliminar el libro?")) return;

		try {
			// const d = confirm("esta seguro de elminar el libro?");

			const myPromise = deleteBookRecommendedRequest(params.id);

			toast.promise(myPromise, {
				loading: "eliminando",
				success: (res) => {
					console.log(res);
					setTimeout(() => {
						navigate("/landing-edit/libros_recomendados");
					}, 1000);
					// navigate("/biblioteca");
					return "Registro eliminado";
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

	const onExit = () => {
		if (selectingBook) return openSearchBook(false);

		const op = window.confirm(
			"seguro que quiere salir? se perderan todos los cambios realizados"
		);

		if (op) navigate("/landing-edit/libros_recomendados");
	};

	const openSearchBook = (open) => {
		setSelectingBook(open ? open : !selectingBook);
	};

	const onClickBook = (bookData) => {
		openSearchBook(false);
		setBook(bookData);
		console.log(`click en el libro ${bookData.id}`);
	};

	return (
		<>
			<Nav
				leftIcon={<BiChevronLeft />}
				leftFuctionOnClick={onExit}
				title={
					selectingBook ? (
						<>
							<div>Biblioteca</div>
							<div>"Juana Milano de Diaz"</div>
						</>
					) : create ? (
						"Añadir libro recomendado"
					) : (
						"Editar libro recomendado"
					)
				}
				// rightButtons={

				// }
			/>

			<div className="scrollInSpacework">
				<div className="container pt-2">
					{/* {!create ? <BookImageSlider book={book} /> : null} */}

					{!selectingBook ? (
						<FormBookRecommended
							create={create}
							// datos

							categoryData={categoryData}
							categoriesList={categoriesList}
							// metodos
							book={book}
							openSearchBook={openSearchBook}
							onSubmit={onSubmit}
							setCategoryData={setCategoryData}
							deleteItem={deleteItem}
							onExit={onExit}
						/>
					) : (
						<BookRecommendedSelectBook onClickBook={onClickBook} />
					)}
				</div>
			</div>
		</>
	);
}
