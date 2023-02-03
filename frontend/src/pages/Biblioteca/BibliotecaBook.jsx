import { Link, useNavigate, useParams } from "react-router-dom";
import { BiChevronLeft, BiTrash } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import styles from "../styles/BibliotecaBook.module.scss";
// import { useAppData } from "../context/AppContext";
import { getBookRequest } from "../../api/books";
import Nav from "../../components/common/Nav";
import BookImageSlider from "../../components/Biblioteca/BookImageSlider";

export function BibliotecaBook() {
	const params = useParams();
	const [book, setBook] = useState({});

	useEffect(() => {
		const getBook = async () => {
			const toastId = toast.loading("cargando datos", {
				id: "refreshDataBiblioteca",
			});

			const res = await getBookRequest(params.id);

			toast.dismiss(toastId);

			console.log(res);
			setBook(res.data);
		};

		getBook();
	}, []);

	const Campo = ({ title, children, validation = null }) => (
		<>
			{validation !== null && validation ? (
				<div>
					<strong>{title}:</strong> {children}
				</div>
			) : null}
		</>
	);

	return (
		<>
			<Nav
				leftIcon={
					<Link to="/biblioteca">
						<BiChevronLeft />
					</Link>
				}
				// leftFuctionOnClick={toggleAsideActive}
				title={"Vista previa"}
				rightButtons={
					<Link to={`/biblioteca/editar/${params.id}`}>
						<button>
							<MdOutlineEdit />
						</button>
					</Link>
				}
			/>

			{book.id ? (
				<div className={styles.container}>


					<BookImageSlider book={book}/>
					
					<h3>{book.title}</h3>

					<h4>{book.subtitle}</h4>

					<Campo title="Descripción" validation={book.description}>
						{book.description}
					</Campo>

					<Campo title="Autor" validation={book.autor}>
						{book.autor}
					</Campo>

					<Campo title="Cota" validation={book.cota}>
						{book.cota}
					</Campo>

					<Campo title="Fecha de edición" validation={book.editionDate}>
						{book.editionDate}
					</Campo>

					<Campo title="Ciudad" validation={book.city}>
						{book.city}
					</Campo>

					<Campo title="Editores" validation={book.editors}>
						{book.editors}
					</Campo>

					<Campo title="Materia" validation={book.materia}>
						{book.materia}
					</Campo>

					<Campo title="Altura" validation={book.height > 0}>
						{book.height} cm
					</Campo>

					<Campo title="Colección" validation={book.Colección}>
						{book.Colección}
					</Campo>

					<Campo title="tipo de adquisicion" validation={book.typeAdquisition}>
						{book.typeAdquisition}
					</Campo>

					<Campo title="observaciones" validation={book.observations}>
						{book.observations}
					</Campo>

					<Campo
						title="Número de paginas"
						validation={typeof book.numberPages === "number"}
					>
						{book.numberPages}
					</Campo>

					<Campo
						title="Número de ejemplares"
						validation={typeof book.numberCopies === "number"}
					>
						{book.numberCopies}
					</Campo>

					<Campo
						title="Ejemplares disponibles"
						validation={typeof book.numberCopiesAvailable === "number"}
					>
						{book.numberCopiesAvailable}
					</Campo>
				</div>
			) : (
				""
			)}
		</>
	);
}
