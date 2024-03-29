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

export function FormVideoLink({
	create,
	categoriesList,
	// datos
	videolinkData,
	categoryData,
	// metodos
	onSubmit,
	onChangeVideoData,
	setCategoryData,
	deleteItem,
	onExit,
}) {
	return (
		<>
			<div className={styles.video}>
				<iframe
					src={
						videolinkData.url
							? formateToEmbeLinkYotube(videolinkData.url)
							: "https://www.youtube.com/embed/dWFBlfZSkak"
					}
					title="YouTube video player"
					frameBorder="0" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
							allowFullScreen
				></iframe>
			</div>

			<Form.Group className="mb-1">
				<Form.Control
					onChange={onChangeVideoData}
					type="text"
					name="url"
					placeholder="Link de youtube"
					value={videolinkData.url}
					autoComplete="none"
					required
				/>
			</Form.Group>

			<Form onSubmit={onSubmit} className="col-12">
				<Form.Group className="mb-1">
					<Form.Control
						onChange={onChangeVideoData}
						type="text"
						name="title"
						placeholder="Título"
						value={videolinkData.title}
						autoComplete="none"
						required
					/>
				</Form.Group>

				<InputGroup>
					<Form.Control
						placeholder="Categoria"
						aria-label="Buscar"
						type="search"
						onChange={(e) => setCategoryData(e.target.value)}
						value={categoryData}
						list="categories"
						required
					/>
				</InputGroup>

				<Form.Group className="mt-1">
					<Form.Control
						onChange={onChangeVideoData}
						name="description"
						// cols="30"
						rows="3"
						value={videolinkData.description}
						autoComplete="none"
						maxLength={255}
						as="textarea"
						placeholder="Descripción"
					/>
				</Form.Group>

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
