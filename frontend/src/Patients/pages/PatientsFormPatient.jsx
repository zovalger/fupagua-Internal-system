import { useNavigate, useParams } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

import Nav from "../../UI/components/Nav";

import { FormPatient } from "../components/FormPatient";

export function PatientsFormPatient() {
	const params = useParams();
	const navigate = useNavigate();

	return (
		<>
			<Nav
				leftIcon={
					<button
						onClick={() => {
							if (
								window.confirm(
									"seguro que quiere salir? se perderan todos los cambios realizados"
								)
							)
								navigate("/pacientes");
						}}
					>
						<BiChevronLeft />
					</button>
				}
				// leftFuctionOnClick={toggleAsideActive}
				title={params.id ? "Editar paciente" : "Añadir paciente"}
			/>

			<div className="scrollInSpacework">
				<div className="container">
					<FormPatient id={params.id} />
				</div>
			</div>
		</>
	);
}
