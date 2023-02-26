import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import styles from "./FormVideoLink.module.scss";

import {
	AiOutlineClose,
	AiOutlineEdit,
	AiOutlinePlus,
	AiOutlineSearch,
} from "react-icons/ai";

import formateToEmbeLinkYotube from "../../../utility/formateToEmbeLinkYotube";
import Book from "../../Biblioteca/Book";

export function FormBookRecommended({
	create,
	categoriesList,
	// datos
	book,
	categoryData,
	// metodos
	onSubmit,
	openSearchBook,
	setCategoryData,
	deleteItem,
	onExit,
}) {
	return (
		<>
			<Form onSubmit={onSubmit} className="col-12">
				{book.id ? (
					<Book dataBook={book} onClick={openSearchBook} />
				) : (
					<div
						onClick={openSearchBook}
						className="btn btn-outline-success bg-light w-100 "
					>
						Seleccionar libro
					</div>
				)}

				<InputGroup className="mt-2">
					<Form.Control
						placeholder="Categoria"
						aria-label="Buscar"
						type="search"
						onChange={(e) => setCategoryData(e.target.value)}
						value={categoryData}
						list="categories"
						required
						autoComplete="none"
					/>
				</InputGroup>

				<div className="row mt-2">
					<div className="col-12 mb-2">
						<button type="submit" className="btn btn-primary w-100">
							Guardar
						</button>
					</div>

					{create ? null : (
						<div className="col-6">
							<button
								type="button"
								className="btn btn-outline-danger w-100"
								onClick={deleteItem}
							>
								Eliminar
							</button>
						</div>
					)}

					<div className={create ? "col-12" : "col-6"}>
						<button
							type="button"
							className="btn btn-outline-secondary w-100"
							onClick={onExit}
						>
							Cancelar
						</button>
					</div>
				</div>

				{/* ******************************************************************* */}
				{/* **********				listado de categorias del video			************* */}
				{/* ******************************************************************* */}
				{/* // todo: buscar las categorias existentes en la base de datos  */}
				{/* // todo: mudar esta lista al padre de todos estos formularios  */}
				<datalist id="categories">
					{categoriesList.map((c, index) =>
						c ? <option value={c} key={index} /> : null
					)}
				</datalist>
			</Form>
		</>
	);
}
