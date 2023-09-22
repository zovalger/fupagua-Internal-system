import { Link } from "react-router-dom";
import Nav from "../UI/components/Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLibraryOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { BsFileSpreadsheet } from "react-icons/bs";

import { useAppData } from "../context/AppContext";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BsListColumnsReverse } from "react-icons/bs";
import UserPath from "../Users/routes/UserPath";
import { Button, Placeholder, PlaceholderButton } from "reactstrap";
import { BiLogIn } from "react-icons/bi";
import UserContext from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { getIpServer_request } from "../api/utility";

const links = [
	// {
	// 	name: "Agenda",
	// 	icon: <BsCalendarWeek />,
	// 	url: "/agenda",
	// },
	{
		name: (
			<>
				<div>Biblioteca</div>
				<div>"Juana Milano de Diaz"</div>
			</>
		),
		icon: <IoLibraryOutline />,
		url: "/biblioteca",
	},

	{
		name: "Pacientes",
		icon: <BsPeopleFill />,
		url: "/pacientes",
		permission: "patientView",
	},
	// {
	// 	name: "Test",
	// 	icon: <BsFileSpreadsheet />,
	// 	url: "/test",
	// 	permission: "testCreation",
	// },
	{
		name: "Editor Página",
		icon: <RiPagesLine />,
		url: "/landing-edit",
		permission: "landingView",
	},
	{
		name: "Usuarios",
		icon: <AiOutlineUser />,
		url: UserPath,
		permission: "userView",
	},
	{
		name: "Bitácora",
		icon: <BsListColumnsReverse />,
		url: `${UserPath}/bitacoras`,
		permission: "bitacoraView",
	},
];

export function HomePage() {
	const { toggleAsideActive } = useAppData();

	const { user, logout } = useContext(UserContext);

	const [ipServer, setIpServer] = useState("");
	useEffect(() => {
		getIpServer_request().then(({ data }) => setIpServer(data));
	}, []);

	return (
		<>
			<Nav
				leftIcon={<RxHamburgerMenu />}
				leftFuctionOnClick={toggleAsideActive}
				title={"FUPAGUA"}
				rightButtons={
					<Link
						to={"login"}
						onClick={() => {
							if (user) logout();
						}}
					>
						<button>
							<BiLogIn />
						</button>
					</Link>
				}
			/>

			<div className="scrollInSpacework">
				<div className="container">
					<div className="d-flex flex-column">
						<p
							style={{ textAlign: "center", fontSize: "1.3rem" }}
							className="mt-4 "
						>
							<>
								<strong> Acceso:</strong>{" "}
								{ipServer || (
									<Placeholder animation="wave" tag="span">
										<Placeholder xs={4} />
									</Placeholder>
								)}
							</>
						</p>

						{links.map((l, index) => {
							const li = (
								<Link
									key={index}
									className="btn bg-light mt-3 py-4 shadow  "
									to={l.url}
								>
									<div className="fs-1">{l.icon}</div>
									<div className=" mt-2">{l.name}</div>
								</Link>
							);

							if (!l.permission) return li;

							if (user && user.permissions.includes(l.permission)) return li;

							return null;
						})}
					</div>
				</div>
			</div>
		</>
	);
}
