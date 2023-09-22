import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import styles from "./FormFupaguaService.module.scss";

import {
	AiOutlineClose,
	AiOutlineEdit,
	AiOutlinePlus,
	AiOutlineSearch,
} from "react-icons/ai";

export function FormEventPost({
	create,
	Data,
	setData,
	onSubmit,
	onChange,
	onDelete,
	onExit,
}) {
	const onChangeDate = (date) => {
		onChange({ target: { name: "toDate", value: date } });
	};

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
				<Form.Group className="mb-1">
					<Form.Label>Título</Form.Label>

					<Form.Control
						onChange={onChange}
						type="text"
						name="title"
						placeholder=""
						value={Data.title}
						autoComplete="none"
						required
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

				<Form.Group className="mb-1">
					<Form.Label>Fecha del evento o actividad</Form.Label>
					<DatePicker
						locale={es}
						className="form-control"
						selected={Data.toDate}
						onChange={onChangeDate}
						// peekNextMonth
						showMonthDropdown
						showYearDropdown
						dropdownMode="select"
						dateFormat="dd/MM/yyyy"
					/>
					{/* <FormFeedback>{formik.errors.name}</FormFeedback> */}
				</Form.Group>

				<Form.Group className="mt-1">
					<Form.Label>Link</Form.Label>

					<Form.Control
						onChange={onChange}
						type="text"
						name="link"
						placeholder=""
						value={Data.link}
						autoComplete="none"
						required
					/>
				</Form.Group>

				<Form.Group controlId="formFile" className="">
					<Form.Label>Foto</Form.Label>
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
