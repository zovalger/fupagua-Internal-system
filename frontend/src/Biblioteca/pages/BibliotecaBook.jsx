import { Link, useNavigate, useParams } from "react-router-dom";
import { BiChevronLeft, BiTrash } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

// import { useAppData } from "../context/AppContext";
import { getBookRequest } from "../../api/books";
import Nav from "../../UI/components/Nav";
import BookImageSlider from "../components/BookImageSlider";
import UserContext from "../../context/UserContext";

export function BibliotecaBook() {
	const params = useParams();
	const { user } = useContext(UserContext);

	const [book, setBook] = useState({});

	useEffect(() => {
		const getBook = async () => {
			const toastId = toast.loading("cargando datos", {
				id: "refreshDataBiblioteca",
			});

			const res = await getBookRequest(params.id);

			toast.dismiss(toastId);

			console.log(res);

			res.data.book_extra_img = res.data.book_extra_img.reverse();

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
					<>
						{user && user.permissions.includes("bibliotecaEdit") && (
							<Link to={`/biblioteca/editar/${params.id}`}>
								<button>
									<MdOutlineEdit />
								</button>
							</Link>
						)}
					</>
				}
			/>

			{book.id ? (
				<div className={"scrollInSpacework"}>
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-sm-12 ">
								<div className="d-flex align-items-center justify-content-center w-100 h-100">
									<BookImageSlider book={book} />
								</div>
							</div>
							<div className="col-lg-8 col-sm-12">
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

								<Campo
									title="Tipo de adquisición"
									validation={book.typeAdquisition}
								>
									{book.typeAdquisition}
								</Campo>

								<Campo title="Observaciones" validation={book.observations}>
									{book.observations}
								</Campo>

								{book.type === "audiobook" ||
								book.type === "video" ||
								book.type === "fonoteca" ? (
									<Campo title="Duración" validation={true}>
										{book.duration}
									</Campo>
								) : (
									<Campo
										title="Número de páginas"
										validation={typeof book.numberPages === "number"}
									>
										{book.numberPages}
									</Campo>
								)}

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
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
}
