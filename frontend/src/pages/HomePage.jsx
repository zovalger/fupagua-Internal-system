import NavInPage from "../components/NavInPage";

import { AiOutlineMenu } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import { useAppData } from "../context/AppContext";

export function HomePage() {
	const { refreshRepresentatives } = useAppData();

	return (
		<>
			<NavInPage>
				<button className="btn ">
					<AiOutlineMenu />
				</button>

				<span>Inicio</span>
			</NavInPage>

			<div className="spacework">
				<div className="container mt-3">
					<button
						className="btn btn-info"
						onClick={async () => {
							await refreshRepresentatives();
							Navigate({ to: "/people" });
						}}
					>
						personas
					</button>
				</div>
			</div>
		</>
	);
}
