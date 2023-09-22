import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import toast from "react-hot-toast";

// import styles from "../styles/Biblioteca.module.scss";
import { useAppData } from "../../../context/AppContext";
import { getBooksRequest } from "../../../api/books";
import Book from "../../../Biblioteca/components/Book";
import SearchingForm from "../../../Biblioteca/components/SearchingForm";

export function BookRecommendedSelectBook({ onClickBook }) {
	const [books, setBooks] = useState([]);
	const [booksQuery, setBooksQuery] = useState([]);
	const [inQuery, setInQuery] = useState(false);
	const { toggleAsideActive } = useAppData();


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
