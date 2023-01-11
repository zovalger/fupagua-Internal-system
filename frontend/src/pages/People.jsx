import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import Person from "../components/Person";
import { Link } from "react-router-dom";
import { useAppData } from "../context/AppContext";
import Nav from "../components/common/Nav";

export function People() {
	const { appData } = useAppData();

	return (
		<>
			<Nav
				leftIcon={
					<Link to="/agenda">
						<RxHamburgerMenu />
					</Link>
				}
				title={"personas"}
				rightButtons={
					<>
						<button>
							<AiOutlinePlus />
						</button>
						<Link to={"/people/new"}>
							<button className="btn"></button>
						</Link>
					</>
				}
			/>

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
