import { useContext, useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";

// *******************************
// 					formik
// *******************************
import es from "date-fns/locale/es";

import { useFormik } from "formik";
import DatePicker from "react-datepicker";

import { v4 as uuid } from "uuid";

import * as Yup from "yup";
import {
	Form,
	Button,
	FormGroup,
	Label,
	Input,
	FormFeedback,
} from "reactstrap";

import { useNavigate } from "react-router-dom";
import ToastContext from "../../context/ToastContext";
import {
	createUserRequest,
	getUserRequest,
	updateUserRequest,
} from "../../api/users";
import { userValidatorSchema } from "../validations/User.validation";
import UserPath from "../routes/UserPath";
import { calculateAge } from "../../utility";
import permissionsSystem from "../../config/permissionsSystem";
import UserContext from "../../context/UserContext";

export function FormUser({ id }) {
	const navigate = useNavigate();

	const { withLoadingSuccessAndErrorFuntionsToast, showErrorToast } =
		useContext(ToastContext);

	const { user, getDataUser } = useContext(UserContext);
	const [listPermises, setListPermises] = useState([]);
	const [isSubmiting, setIsSubmitin] = useState(false);

	useEffect(() => {
		// si estamos en el modo crear no se ejecuta, si no buscamos los datos del registro
		if (!id) return;

		getUserRequest(id).then((res) => restoreDataInInputs(res.data));
	}, []);

	// formik
	const formik = useFormik({
		initialValues: {
			name: "",
			CI: "",
			birthdate: new Date(Date.now()),
			address: "",
			phone: "",
			email: "",
			password: "",
		},
		validationSchema: userValidatorSchema,
		onSubmit: (formData) => {
			console.log(formData);

			const data = formData;

			data.permissions = listPermises;

			if (isSubmiting) return;

			setIsSubmitin(true);

			try {
				withLoadingSuccessAndErrorFuntionsToast(
					id ? updateUserRequest(id, data) : createUserRequest(data),
					(res) => {
						setTimeout(() => {
							if (id.toString() === user.id.toString()) getDataUser();
							navigate(`${UserPath}`);
						}, 500);
						return id ? "cambios guardados" : "Nuevo Usuario añadido";
					},
					(err) => {
						setIsSubmitin(false);
						return `This just happened: ${err.toString()}`;
					}
				);
			} catch (error) {
				setIsSubmitin(false);
				console.log(error);
			}
		},
	});

	const restoreDataInInputs = (user) => {
		if (!user.id) return;

		const { permissions, birthdate } = user;
		user.permissions = permissions || [];
		user.password = "";

		user.birthdate = new Date(birthdate);

		setListPermises(user.permissions);
		formik.setValues({ ...user });
	};

	const changePermises = (per) => {
		const index = listPermises.findIndex((p) => (p == per ? true : false));

		if (index === -1) {
			setListPermises([...listPermises, per]);
		} else {
			setListPermises(listPermises.filter((p) => (p === per ? false : true)));
		}
	};
	const permissions = () => {
		const list = [];

		for (const key in permissionsSystem) {
			if (Object.hasOwnProperty.call(permissionsSystem, key)) {
				list.push(key);
				// const element = permissionsSystem[key];
			}
		}

		return list.map((i) => (
			<FormGroup check key={uuid()}>
				<Input
					name="type"
					type="switch"
					id={i}
					checked={listPermises.includes(i)}
					onChange={() => {
						changePermises(i);
					}}
				/>
				<Label check for={i}>
					{permissionsSystem[i]}
				</Label>
			</FormGroup>
		));
	};

	return (
		<>
			<Form onSubmit={formik.handleSubmit}>
				{/********************************  Input para los Nombres *********************************/}
				<FormGroup>
					<Label for="name">Nombre completo</Label>

					<Input
						id="name"
						name="name"
						type="text"
						autoComplete="none"
						placeholder="Escriba aqui"
						value={formik.values.name}
						onChange={formik.handleChange}
						invalid={!!formik.errors.name}
					/>
					<FormFeedback>{formik.errors.name}</FormFeedback>
				</FormGroup>

				{/********************************  Input para la Cédula *********************************/}
				<FormGroup>
					<Label for="CI">Cédula</Label>
					<Input
						id="CI"
						name="CI"
						type="number"
						autoComplete="none"
						placeholder="00000000"
						value={formik.values.CI}
						onChange={formik.handleChange}
						invalid={!!formik.errors.CI}
						onWheel={(e) => e.target.blur()}
					/>
					<FormFeedback>{formik.errors.CI}</FormFeedback>
				</FormGroup>

				{/********************************  Container de varios inputs *********************************/}
				<FormGroup>
					<Label>Fecha de nacimiento</Label>
					<DatePicker
						locale={es}
						// className=""
						className={`form-control `}
						selected={formik.values.birthdate}
						onChange={(date) => formik.setFieldValue("birthdate", date)}
						// peekNextMonth
						showMonthDropdown
						showYearDropdown
						dropdownMode="select"
						dateFormat="dd/MM/yyyy"
						placeholderText="00/00/0000"
						invalid={!!formik.errors.birthdate}
					/>
					<Input
						// value={formik.values.birthdate}
						invalid={!!formik.errors.birthdate}
						hidden
					/>

					<FormFeedback>
						{`${formik.errors.birthdate} - Edad colocada: ${calculateAge(
							formik.values.birthdate
						)}`}
					</FormFeedback>
				</FormGroup>

				<FormGroup>
					<Label for="phone">Teléfono</Label>
					<Input
						id="phone"
						name="phone"
						type="text"
						autoComplete="none"
						placeholder="Escriba aqui"
						value={formik.values.phone}
						onChange={formik.handleChange}
						invalid={!!formik.errors.phone}
					/>
					<FormFeedback>{formik.errors.phone}</FormFeedback>
				</FormGroup>
				{/********************************  input para la Dirección *********************************/}
				<FormGroup>
					<Label for="address">Dirección</Label>
					<Input
						id="address"
						name="address"
						type="text"
						autoComplete="none"
						placeholder="Escriba aqui"
						value={formik.values.address}
						onChange={formik.handleChange}
						invalid={!!formik.errors.address}
					/>
					<FormFeedback>{formik.errors.address}</FormFeedback>
				</FormGroup>

				{/********************************  input para el Correo Electrónico *********************************/}

				<FormGroup>
					<Label for="email">Correo Electrónico</Label>
					<Input
						id="email"
						name="email"
						type="email"
						autoComplete="none"
						placeholder="Escriba aqui"
						value={formik.values.email}
						onChange={formik.handleChange}
						invalid={!!formik.errors.email}
					/>
					<FormFeedback>{formik.errors.email}</FormFeedback>
				</FormGroup>

				<FormGroup>
					<Label for="password">Contraseña</Label>
					<Input
						id="password"
						name="password"
						// type="password"
						autoComplete="none"
						placeholder="Escriba aqui"
						value={formik.values.password}
						onChange={formik.handleChange}
						invalid={!!formik.errors.password}
					/>
					<FormFeedback>{formik.errors.password}</FormFeedback>
				</FormGroup>

				{/********************************  Input para los permisos*********************************/}
				<FormGroup>
					<Label>Permisos</Label>
					<div>{permissions()}</div>
				</FormGroup>

				<Button color="primary" type="submit" className="w-100 mt-4">
					Guardar
				</Button>
			</Form>
		</>
	);
}
