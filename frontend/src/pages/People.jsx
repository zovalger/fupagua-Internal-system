import NavBar from "../components/NavBar";
import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";

import NavInPage from "../components/NavInPage";
import Person from "../components/Person";
import { Link } from "react-router-dom";
import { useAppData } from "../context/AppContext";

export function People() {
	const { appData } = useAppData();

	return (
		<>
			<NavInPage>
				<button className="btn">
					<AiOutlineMenu />
				</button>

				<span>personas</span>

				<Link to={"/people/new"}>
					<button className="btn">
						<AiOutlinePlus />
					</button>
				</Link>
			</NavInPage>

			<div className="spacework">
				<div className="container mt-3">
					<form action="#">
						<div className="input-group">
							<input
								type="search"
								className="form-control"
								placeholder="Nombre o CI"
							/>
							<button className="btn btn-primary"> Inicio</button>
						</div>
					</form>

					<div className="mt-2">
						{appData.representativeData.map((data) => (
							<Person data={data} key={data.id} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}
