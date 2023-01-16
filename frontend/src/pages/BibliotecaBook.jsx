import styles from "./styles/BibliotecaAddBook.module.scss";

import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "../components/common/Nav";
import { BiChevronLeft, BiTrash } from "react-icons/bi";

import { useAppData } from "../context/AppContext";
import { useEffect, useState } from "react";
import { getBookRequest } from "../api/books";

export function BibliotecaBook() {
	const params = useParams();
	const [book, setBook] = useState({
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
		const getBook = async () => {
			const res = await getBookRequest(params.id);
			console.log(res);
			setBook(res.data);
		};

		getBook();
	}, []);

	return (
		<>
			<Nav
				leftIcon={
					<Link to="/biblioteca">
						<BiChevronLeft />
					</Link>
				}
				// leftFuctionOnClick={toggleAsideActive}
				title={"vista previa"}
				rightButtons={
					<Link to={`/biblioteca/editar/${params.id}`}>
						<button>editar</button>
					</Link>
				}
			/>

			<div className={styles.container}>
				<h3>{book.title}</h3>
				<div>
					<strong>descripcion:</strong> {book.description}
				</div>
				<div>
					<strong>autor:</strong> {book.autor}
				</div>
				<div>
					<strong>fecha de edicion:</strong> {new Date(book.editionDate).toLocaleDateString()}
				</div>
				<div>
					<strong>materia:</strong> {book.materia}
				</div>
				<div>
					<strong>numero de ejemplares:</strong> {book.numberCopies}
				</div>
				<div>
					<strong>cota:</strong> {book.cota}
				</div>
				<div>
					<strong>dimensiones:</strong> {`${book.width} cm X ${book.height} cm`}
				</div>
				<div>
					<strong>Numero de paginas:</strong> {book.numberPages}
				</div>
				<div>
					<strong>datos adicinales:</strong>{" "}
					{
						<>
							<div>{book.city} </div>
							<div>{book.editors} </div>
							<div>{book.collection} </div>
						</>
					}
				</div>
			</div>
		</>
	);
}
