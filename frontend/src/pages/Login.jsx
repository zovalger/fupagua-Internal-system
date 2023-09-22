import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Nav from "../UI/components/Nav";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import ToastContext from "../context/ToastContext";

export const Login = () => {
	const navigate = useNavigate();

	const { withLoadingSuccessAndErrorFuntionsToast } = useContext(ToastContext);

	const { login } = useContext(UserContext);
	const [isSubmiting, setIsSubmiting] = useState(false);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required()
				.email(
					"El texto introducido no tiene el formato de un correo electrónico"
				),
			password: Yup.string().required(),
		}),
		onSubmit: (formData) => {
			if (isSubmiting) return;
			console.log(formData);
			setIsSubmiting(true);

			withLoadingSuccessAndErrorFuntionsToast(
				login(formData),
				(user) => {
					console.log(user);
					navigate(`/`);
					return "autenticado correctamente";
				},
				(error) => {
					console.log(error);
					setIsSubmiting(false);
					const message = error.response.data.message;
					console.log(error);
					return message ? message : error.message;
				}
			);
		},
	});

	return (
		<>
			<Nav
				leftIcon={
					<button onClick={() => navigate("/")}>
						<BiChevronLeft />
					</button>
				}
				// leftFuctionOnClick={toggleAsideActive}
				title={"Iniciar sesion"}
			/>

			<div className="scrollInSpacework">
				<div className="container pt-5">
					<Form onSubmit={formik.handleSubmit}>
						<FormGroup floating>
							<Input
								value={formik.values.email}
								invalid={!!formik.errors.email}
								onChange={formik.handleChange}
								id="email"
								name="email"
								placeholder="Correo electrónico"
								type="email"
							/>
							{/* <FormFeedback>{formik.errors.email}</FormFeedback> */}

							<Label for="email">Correo electrónico</Label>
						</FormGroup>

						<FormGroup floating>
							<Input
								value={formik.values.password}
								invalid={!!formik.errors.password}
								onChange={formik.handleChange}
								id="password"
								name="password"
								placeholder="password"
								type="password"
							/>
							<Label for="password">Contraseña</Label>
						</FormGroup>
						<Button className="w-100" color="primary">Iniciar sesión</Button>
					</Form>
				</div>
			</div>
		</>
	);
};
