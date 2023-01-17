import styles from "./styles/Biblioteca.module.scss";

import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/common/Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

import { useAppData } from "../context/AppContext";
import Book from "../components/Biblioteca/Book";
import { useEffect, useState } from "react";
import { getBooksRequest } from "../api/books";
import toast from "react-hot-toast";

export function Biblioteca() {
	const [books, setBooks] = useState([]);
	const [booksQuery, setBooksQuery] = useState([]);
	const [query, setQuery] = useState({ textToQuery: "" });
	const [inQuery, setInQuery] = useState(false);
	const { toggleAsideActive } = useAppData();

	const navigate = useNavigate();

	useEffect(() => {
		const fillList = async () => {
			const res = await getBooksRequest();
			console.log(res);
			setBooks(res.data);
		};

		fillList();
	}, []);

	const makeQuery = async (e) => {
		try {
			e.preventDefault();
			const res = await getBooksRequest(query);
			const { data } = res;
			console.log(res);

			if (data.length <= 0)
				return toast.error("No coincide ningun libro", { duration: 2500 });

			setInQuery(true);
			setBooksQuery(res.data);
		} catch (error) {
			console.log(error);
			const { response: res } = error;

			if (res.status === 404)
				return toast.error(res.data.message, { duration: 2000 });
		}
	};

	const onInputChange = ({ target: { name, value } }) => {
		if (value.length <= 0) setInQuery(false);

		console.log(name, value);
		setQuery({
			...query,
			[name]: value,
		});
	};

	return (
		<>
			<Nav
				leftIcon={<RxHamburgerMenu />}
				leftFuctionOnClick={toggleAsideActive}
				title={"Biblioteca"}
				rightButtons={
					<Link to={"/biblioteca/nuevo_libro"}>
						<button>
							<AiOutlinePlus />
						</button>
					</Link>
				}
			/>

			{/*********************************************************************
			
												formulario para buscar libros 
				
			*********************************************************************/}

			<form className={styles.searchForm} onSubmit={makeQuery}>
				<div className={styles.searchInput}>
					<input
						name="textToQuery"
						type="search"
						onChange={onInputChange}
						autoComplete="none"
					/>
					<button>
						<AiOutlineSearch />
					</button>
				</div>
			</form>

			<div className={styles.container}>
				<div className={styles.books}>
					{/*********************************************************************
									muestra el contenido de la busqueda solo si
											hay algun valor en el formulario de busqueda
											hay almenos un elemento en mostrado 
					*********************************************************************/}
					{inQuery && booksQuery.length > 0
						? booksQuery.map((book) => (
								<Link to={`./${book.id}`} key={book.id}>
									<Book title={book.title} description={book.description} />
								</Link>
						  ))
						: books.map((book) => (
								<Link to={`./${book.id}`} key={book.id}>
									<Book title={book.title} description={book.description} />
								</Link>
						  ))}
				</div>
			</div>
		</>
	);
}
