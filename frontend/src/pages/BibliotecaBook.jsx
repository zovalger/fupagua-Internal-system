import styles from "./styles/BibliotecaBook.module.scss";

import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "../components/common/Nav";
import { BiChevronLeft, BiTrash } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";

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
						<button>
							<MdOutlineEdit />
						</button>
					</Link>
				}
			/>

			<div className={styles.container}>
				<h3>{book.title}</h3>

				<div>
					<strong>Descripción:</strong> {book.description}
				</div>

				{book.autor ? (
					<div>
						<strong>Autor:</strong> {book.autor}
					</div>
				) : null}

				{book.editionDate ? (
					<div>
						<strong>Fecha de edición:</strong>
						{new Date(book.editionDate).toLocaleDateString()}
					</div>
				) : null}

				{book.materia ? (
					<div>
						<strong>Materia:</strong> {book.materia}
					</div>
				) : null}

				<div>
					<strong>Cota:</strong> {book.cota}
				</div>

				{typeof book.numberCopies === "number" ? (
					<div>
						<strong>Número de ejemplares:</strong> {book.numberCopies}
					</div>
				) : null}

				{typeof book.numberCopiesAvailable === "number" ? (
					<div>
						<strong>Ejemplares disponibles:</strong>{" "}
						{book.numberCopiesAvailable}
					</div>
				) : null}

				{book.width ? (
					<div>
						<strong>Dimensiones:</strong>{" "}
						{`${book.width} cm X ${book.height} cm`}
					</div>
				) : null}

				{typeof book.numberPages === "number" ? (
					<div>
						<strong>Número de paginas:</strong> {book.numberPages}
					</div>
				) : null}

				{book.city ? (
					<div>
						<strong>Ciudad:</strong> {book.city}
					</div>
				) : null}

				{book.editors ? (
					<div>
						<strong>Editores:</strong> {book.editors}
					</div>
				) : null}

				{book.collection ? (
					<div>
						<strong>Colección:</strong> {book.collection}
					</div>
				) : null}
			</div>
		</>
	);
}
