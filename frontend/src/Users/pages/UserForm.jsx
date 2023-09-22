import { useNavigate, useParams } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

import Nav from "../../UI/components/Nav";

import { FormUser } from "../components/FormUser";
import UserPath from "../routes/UserPath";

export default function UserForm() {
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
								navigate(`${UserPath}`);
						}}
					>
						<BiChevronLeft />
					</button>
				}
				// leftFuctionOnClick={toggleAsideActive}
				title={params.id ? "Editar usuario" : "Añadir usuario"}
			/>

			<div className="scrollInSpacework">
				<div className="container mt-4">
					<FormUser id={params.id} />
				</div>
			</div>
		</>
	);
}
