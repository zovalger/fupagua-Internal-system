import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { MdOutlineArrowBackIos } from "react-icons/md";

import NavInPage from "../components/NavInPage";
import { Link, Navigate } from "react-router-dom";
import {
	createRepresentativeRequest,
	jointRepresentativeWithPatient,
} from "../api/representatives";
import { createPatientRequest } from "../api/patients";

export function PeopleNew() {
	// const onSubmitHandle = (e) => {
	// 	console.log(e);
	// 	// e.preventDefault
	// };

	const LabelForm = ({ htmlFor, children }) => (
		<label className="mt-2" htmlFor={htmlFor}>
			{children}
		</label>
	);

	return (
		<>
			<NavInPage>
				<Link to={"/people"}>
					<button className="btn">
						<MdOutlineArrowBackIos />
					</button>
				</Link>

				<span>anadir</span>
			</NavInPage>

			<div className="spacework">
				<div className="container mt-3">
					<Formik
						initialValues={{
							namePatient: "",
							agePatient: "",
							school: "",
							ciRepresentative: "",
							nameRepresentative: "",
							phoneNumberRepresentative: "",
						}}
						enableReinitialize
						validationSchema={Yup.object({
							namePatient: Yup.string().required(
								"ingrese el nombre del paciente"
							),
							agePatient: Yup.number().required("ingrese la edad del paciente"),
							school: Yup.string(),
							ciRepresentative: Yup.string().required(
								"falta la cedula del representante"
							),
							nameRepresentative: Yup.string().required(
								"Falta el nombre del representante"
							),
							phoneNumberRepresentative: Yup.string().required(
								"falta el Numero del representante"
							),
						})}
						onSubmit={async (values, actions) => {
							// mandar el formulario

							const {
								agePatient,
								namePatient,
								school,
								nameRepresentative,
								ciRepresentative,
								phoneNumberRepresentative,
							} = values;

							console.log(values);

							console.log(actions);

							const bodyRepresentative = {
								name: nameRepresentative,
								ci: ciRepresentative,
								phoneNumber: phoneNumberRepresentative,
							};

							const bodyPatient = {
								name: namePatient,
								age: agePatient,
								school,
							};

							const resRepresentative = await createRepresentativeRequest(
								bodyRepresentative
							);

							const resPatient = await createPatientRequest(bodyPatient);

							const representative = resRepresentative.data,
								patient = resPatient.data;


								console.log(resPatient)
								console.log(resRepresentative)

							console.log(
								await jointRepresentativeWithPatient(
									representative.id,
									patient.id
								)
							);

							// if (params.id) {
							//   await updatePost(params.id, values);
							// } else {
							//   await createPost(values);
							// }

							// actions.resetForm();
							// actions.setSubmitting(false);
							// Navigate("/");
						}}
					>
						{({ setFieldValue, isSubmitting, handleSubmit }) => (
							<Form onSubmit={handleSubmit}>
								<h6 className="mt-3 text-center">datos del paciente</h6>

								<LabelForm htmlFor="namePatient">nombre</LabelForm>

								<Field
									className="form-control"
									placeholder="nombre completo"
									name="namePatient"
									// autoFocus
								/>
								<ErrorMessage component="p" name="namePatient" className="" />

								<LabelForm htmlFor="agePatient" className="">
									edad
								</LabelForm>

								<Field
									className="form-control"
									placeholder="0"
									name="agePatient"
									type="number"
									// autoFocus
								/>
								<ErrorMessage component="p" name="agePatient" className="" />

								<LabelForm htmlFor="school" className="">
									escolaridad
								</LabelForm>

								<Field
									className="form-control"
									placeholder="primer grado"
									name="school"
									// autoFocus
								/>
								<ErrorMessage component="p" name="school" className="" />

								<h6 className="mt-3 text-center">datos del representante</h6>

								<LabelForm htmlFor="ciRepresentative" className="">
									cedula
								</LabelForm>

								<Field
									className="form-control"
									placeholder="12345678"
									name="ciRepresentative"
									// autoFocus
								/>
								<ErrorMessage
									component="p"
									name="ciRepresentative"
									className=""
								/>

								<LabelForm htmlFor="nameRepresentative" className="">
									nombre
								</LabelForm>

								<Field
									className="form-control"
									placeholder="nombre completo"
									name="nameRepresentative"
									// autoFocus
								/>
								<ErrorMessage
									component="p"
									name="nameRepresentative"
									className=""
								/>

								<LabelForm htmlFor="phoneNumberRepresentative" className="">
									telefono
								</LabelForm>

								<Field
									className="form-control"
									placeholder="04241234567"
									name="phoneNumberRepresentative"
									// autoFocus
								/>
								<ErrorMessage
									component="p"
									name="phoneNumberRepresentative"
									className=""
								/>

								<button
									type="submit"
									className="btn btn-primary my-2"
									// disabled={isSubmitting}
								>
									{/* {isSubmitting ? (
										<AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
									) : ( */}
									save
									{/* )} */}
								</button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
}
