// import styles from "./styles/HomePage.module.scss";

import { Link, Navigate, useNavigate } from "react-router-dom";
import Nav from "../../components/common/Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLibraryOutline } from "react-icons/io5";
import { BsCalendarWeek, BsPeopleFill } from "react-icons/bs";

import { useAppData } from "../../context/AppContext";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { AiOutlineBook, AiOutlineYoutube } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";

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
							<Link className="btn bg-light mt-3 py-4 shadow  " to={l.url}>
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
