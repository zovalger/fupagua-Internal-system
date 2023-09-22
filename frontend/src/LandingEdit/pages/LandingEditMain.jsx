// import styles from "./styles/HomePage.module.scss";

import { Link, useNavigate } from "react-router-dom";
import Nav from "../../UI/components/Nav";

import { useAppData } from "../../context/AppContext";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { AiOutlineBook, AiOutlineYoutube } from "react-icons/ai";
import { BiChevronLeft, BiPhotoAlbum } from "react-icons/bi";

export function LandingEditMain() {
	const { toggleAsideActive } = useAppData();
	const navigate = useNavigate();

	const links = [
		{ name: "Videos", icon: <AiOutlineYoutube />, url: "/landing-edit/videos" },
		{
			name: "Servicios",
			icon: <RiCustomerService2Line />,
			url: "/landing-edit/servicios",
		},
		{
			name: "Empleados",
			icon: <GrUserWorker />,
			url: "/landing-edit/empleados",
		},
		{
			name: "Libros Recomendados",
			icon: <AiOutlineBook />,
			url: "/landing-edit/libros_recomendados",
		},
		{
			name: "Eventos y actividades",
			icon: <BiPhotoAlbum />,
			url: "/landing-edit/eventos-actividades",
		},

		


		
	];
	return (
		<>
			<Nav
				leftIcon={<BiChevronLeft />}
				leftFuctionOnClick={() => navigate("/")}
				// leftIcon={<RxHamburgerMenu />}
				// leftFuctionOnClick={toggleAsideActive}
				title={"Edicion de pagina"}
			/>

			<div className="scrollInSpacework">
				<div className="container">
					<div className="d-flex flex-column">
						{links.map((l, index) => (
							<Link key={index} className="btn bg-light mt-3 py-4 shadow  " to={l.url}>
								<div className="fs-1">{l.icon}</div>
								<div className=" mt-2">{l.name}</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
