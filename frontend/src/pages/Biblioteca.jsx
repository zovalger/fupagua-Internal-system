import styles from "./styles/Biblioteca.module.scss";

import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/common/Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

import { useAppData } from "../context/AppContext";
import Book from "../components/Biblioteca/Book";
import { useEffect, useState } from "react";
import { getBooksRequest } from "../api/books";

export function Biblioteca() {
	const [books, setBooks] = useState([]);
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

			{/* <form className={styles.searchForm}>
				<div className={styles.searchInput}>
					<input type="search" />
					<button type="button">
						<AiOutlineSearch />
					</button>
				</div>
			</form> */}

			<div className={styles.container}>
				<div className={styles.books}>
					{books.map((book) => (
						<Link to={`./${book.id}`} key={book.id}>
							<Book title={book.title} description={book.description} />
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
