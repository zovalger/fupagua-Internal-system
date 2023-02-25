import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiChevronLeft } from "react-icons/bi";

import {
	AiOutlinePlus,
	AiOutlineSearch,
	AiOutlineReload,
} from "react-icons/ai";
import toast from "react-hot-toast";

// import styles from "../styles/Biblioteca.module.scss";
import { useAppData } from "../../../context/AppContext";
import { getBooksRequest } from "../../../api/books";
import Nav from "../../common/Nav";
import Book from "../../Biblioteca/Book";
import SearchingForm from "../../Biblioteca/SearchingForm";

export function BookRecommendedSelectBook({ onClickBook }) {
	const [books, setBooks] = useState([]);
	const [booksQuery, setBooksQuery] = useState([]);
	const [inQuery, setInQuery] = useState(false);
	const { toggleAsideActive } = useAppData();

	const navigate = useNavigate();

	const refreshData = async () => {
		const myPromise = getBooksRequest();

		toast.promise(
			myPromise,
			{
				id: "refreshDataBiblioteca",
				loading: "cargando datos",
				success: (res) => {
					console.log(res);
					setBooks(res.data);
				},
				error: (err) => `This just happened: ${err.toString()}`,
			},
			{
				success: {
					duration: 10,
				},
			}
		);
	};

	useEffect(() => {
		refreshData();
	}, []);

	const getListOfBooks = async (query) => {
		try {
			const myPromise = getBooksRequest(query);

			// e.preventDefault();

			toast.promise(
				myPromise,
				{
					id: "refreshDataBiblioteca",
					loading: "cargando datos",
					success: (res) => {
						console.log(res);
						setInQuery(true);
						setBooksQuery(res.data);
						if (res.data.length <= 0)
							return toast.error("No coincide ningun elemento", {
								duration: 2500,
							});
					},
					error: (err) => `This just happened: ${err.toString()}`,
				},
				{
					success: {
						duration: 10,
					},
				}
			);
		} catch (error) {
			console.log(error);
			const { response: res } = error;

			if (res.status === 404)
				return toast.error(res.data.message, { duration: 5 });
		}
	};

	const llenarLista = (book) => (
		// <Link to={`./${book.id}`} key={book.id}>
		<Book dataBook={book} onClick={() => onClickBook(book)} />
		// </Link>
	);
	return (
		<>
			{/*********************************************************************
			
												formulario para buscar libros 
				
			*********************************************************************/}

			<SearchingForm
				getListOfBooks={getListOfBooks}
				cancelQuery={() => setInQuery(false)}
			/>

			{/*********************************************************************
									muestra el contenido de la busqueda solo si
											hay algun valor en el formulario de busqueda
											hay almenos un elemento en mostrado 
					*********************************************************************/}
			{inQuery && booksQuery.length > 0
				? booksQuery.map(llenarLista)
				: books.map(llenarLista)}
		</>
	);
}
