import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import styles from "./FormFupaguaEmpleados.module.scss";

import {
	AiOutlineClose,
	AiOutlineEdit,
	AiOutlinePlus,
	AiOutlineSearch,
} from "react-icons/ai";

export function FormFupaguaEmpleados({
	create,
	Data,
	setData,
	serviceList,
	onSubmit,
	onChange,
	onDelete,
	onExit,
}) {
	return (
		<>
			{!create && Data.imgfileId ? (
				<div className={styles.image}>
					<img
						src={
							Data.imgfile.img_cloudinary_url
								? Data.imgfile.img_cloudinary_url
								: Data.imgfile.img_local_url
								? `/${Data.imgfile.img_local_url}`
								: `/${Data.imgfile.img_local_url_original}`
						}
						className="d-block w-100"
						alt="imagen de servicio"
					/>
				</div>
			) : null}

			<Form onSubmit={onSubmit} className="col-12">
				<Form.Label>Servicio</Form.Label>

				<Form.Select
					onChange={onChange}
					name="fupaguaserviceId"
					value={Data.fupaguaserviceId}
				>
					<option value={null}>selecciones un servicio</option>

					{serviceList.map((i) => (
						<option value={i.id}>{i.title}</option>
					))}
				</Form.Select>

				<Form.Group className="mb-1">
					<Form.Label>Nombre</Form.Label>

					<Form.Control
						onChange={onChange}
						type="text"
						name="name"
						placeholder=""
						value={Data.name}
						autoComplete="none"
						required
					/>
				</Form.Group>

				<Form.Group className="mb-1">
					<Form.Label>Cédula</Form.Label>

					<Form.Control
						onChange={onChange}
						type="text"
						name="ci"
						placeholder=""
						value={Data.ci}
						autoComplete="none"
					/>
				</Form.Group>

				<Form.Group className="mb-1">
					<Form.Label>Certificados</Form.Label>

					<Form.Control
						onChange={onChange}
						type="text"
						name="FPV"
						value={Data.FPV}
						autoComplete="none"
						maxLength={255}
						as="textarea"
						placeholder={"FPV: 000\nSACS: 000"}
					/>
				</Form.Group>

				<Form.Group className="mb-1">
					<Form.Label>Correo electrónico</Form.Label>

					<Form.Control
						onChange={onChange}
						type="text"
						name="email"
						placeholder=""
						value={Data.email}
						autoComplete="none"
					/>
				</Form.Group>

				<Form.Group className="mt-1">
					<Form.Label>Descripción</Form.Label>

					<Form.Control
						onChange={onChange}
						name="description"
						// cols="30"
						rows="3"
						value={Data.description}
						autoComplete="none"
						maxLength={1000}
						as="textarea"
						placeholder=""
					/>
				</Form.Group>

				<Form.Group controlId="formFile" className="">
					<Form.Label>Imagen de perfil</Form.Label>
					<Form.Control
						type="file"
						onChange={(e) => {
							setData({
								...Data,
								img: e.target.files[0],
							});
						}}
						name="img"
						accept="image/*"

						// placeholder="icono"
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
							onClick={onExit}
						>
							Cancelar
						</button>
					</div>
				</div>
			</Form>
		</>
	);
}
