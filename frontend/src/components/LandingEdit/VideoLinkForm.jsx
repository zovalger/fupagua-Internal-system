import Button from "react-bootstrap/esm/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import styles from "./VideoLinkForm.module.scss";
import { useState } from "react";
import {
	AiOutlineClose,
	AiOutlineEdit,
	AiOutlinePlus,
	AiOutlineSearch,
} from "react-icons/ai";
import {
	createVideoLinkRequest,
	deleteVideoLinkRequest,
	updateVideoLinkRequest,
} from "../../api/videoLinks";
import toast from "react-hot-toast";

export function VideoLinkForm({
	data,
	categoriesDataList,
	create,
	onCancelButton,
}) {
	const {id, title, description, url, categoryvideo } = data;
	const { title: titleC } = categoryvideo;

	const [videoData, setVideoData] = useState({ title, description, url });

	const [isSubmiting, setIsSubmitin] = useState(false);

	const [onEdit, setOnEdit] = useState(create);

	const [curretTextCategory, setCurretTextCategory] = useState(titleC);

	const onChange = ({ target: { name, value } }) =>
		setVideoData({ ...videoData, [name]: value });

	// todo enviar formulario
	const onSubmit = async (e) => {
		e.preventDefault();
		if (isSubmiting) return;
		setIsSubmitin(true);

		const body = {};
		body.videolink = videoData;
		body.category = curretTextCategory;

		try {
			const myPromise = create
				? createVideoLinkRequest(body)
				: updateVideoLinkRequest(id, body);

			console.log(myPromise);

			toast.promise(myPromise, {
				loading: "guardando",
				success: (res) => {
					console.log(res);

					toEdit(false);

					if (onCancelButton) onCancelButton();
					return create ? "Añadido correctamente" : "cambios guardados";
				},
				error: (err) => {
					setIsSubmitin(false);
					return `This just happened: ${err.toString()}`;
				},
			});
		} catch (error) {
			setIsSubmitin(false);
			console.log(error);
		}

		// si es create enviar solicitud para crear un nuevo registro
	};

	const toEdit = (bol) => {
		setOnEdit(bol);
	};

	// todo: volver a poner los datos anteriores
	const onCancel = () => {
		toEdit(false);
		if (onCancelButton) onCancelButton();
	};

	const onDelete = () => {
		if (!window.confirm("Seguro que quiere eliminar el registro?")) return;

		try {
			// const d = confirm("esta seguro de elminar el libro?");

			const myPromise = deleteVideoLinkRequest(id);

			toast.promise(myPromise, {
				loading: "eliminando",
				success: (res) => {
					console.log(res);

					return "Registro eliminado";
				},
				error: (err) => `This just happened: ${err.toString()}`,
			});
		} catch (error) {
			console.log(error);
			const { response: res } = error;

			if (res.status === 404)
				return toast.error(res.data.message, { duration: 2000 });
		}
	};

	return (
		<div className={styles.container}>
			<div className="row">
				{!create ? (
					<div className="  ">
						<div className={styles.video}>
							<iframe
								src="https://www.youtube.com/embed/dWFBlfZSkak"
								title="YouTube video player"
							></iframe>
						</div>
					</div>
				) : null}
				<div className="">
					{!onEdit ? (
						<>
							<div className="small p-2" onClick={() => toEdit(true)}>
								{videoData.title}
							</div>

							{/* <div className="small">Link: {videoData.url}</div>
							<div className="small">Descripcion: {videoData.description}</div>
							<div className="small">Categoria: {curretTextCategory}</div> */}
						</>
					) : (
						<Form onSubmit={onSubmit} className="p-2">
							<Form.Group className="mb-1">
								<Form.Control
									onChange={onChange}
									type="text"
									name="title"
									placeholder="titulo"
									value={videoData.title}
									autoComplete="none"
									required
								/>
							</Form.Group>

							<Form.Group className="mb-1">
								<Form.Control
									onChange={onChange}
									type="text"
									name="url"
									placeholder="link de youtube"
									value={videoData.url}
									autoComplete="none"
									required
								/>
							</Form.Group>

							<InputGroup>
								<Form.Control
									placeholder="Categoria"
									aria-label="Buscar"
									type="text"
									onChange={(e) => setCurretTextCategory(e.target.value)}
									value={curretTextCategory}
									list="categories"
									required
								/>
							</InputGroup>

							<Form.Group className="mt-1">
								<Form.Control
									onChange={onChange}
									name="description"
									// cols="30"
									rows="3"
									value={videoData.description}
									autoComplete="none"
									maxLength={255}
									as="textarea"
									placeholder="descripcion"
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
											onClick={onDelete}
										>
											Eliminar
										</button>
									</div>
								)}

								<div className={create ? "col-12" : "col-6"}>
									<button
										type="button"
										className="btn btn-outline-secondary w-100"
										onClick={onCancel}
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
								{categoriesDataList.map((c) => (
									<option value={c} />
								))}
							</datalist>
						</Form>
					)}
				</div>
			</div>
		</div>
	);
}
