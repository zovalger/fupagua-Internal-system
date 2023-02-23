// import styles from "./styles/HomePage.module.scss";

import { Link, Navigate } from "react-router-dom";
import Nav from "../../components/common/Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLibraryOutline } from "react-icons/io5";
import { BsCalendarWeek, BsPeopleFill } from "react-icons/bs";

import { useAppData } from "../../context/AppContext";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";

export function LandingEditMain() {
	const { toggleAsideActive } = useAppData();
	return (
		<>
			<Nav
				leftIcon={<RxHamburgerMenu />}
				leftFuctionOnClick={toggleAsideActive}
				title={"Edicion de pagina"}
			/>

			<div className="scrollInSpacework">
				<div className="container">
					<Link to={`/landing-edit/videos`}>
						<div className="">
							<IoLibraryOutline />
						</div>
						<div>Videos</div>
					</Link>

					<Link to={`/landing-edit/servicios`}>
						<div className="">
							<RiCustomerService2Line />
						</div>
						<div>Servicios</div>
					</Link>

					<Link to={`/landing-edit/empleados`}>
						<div className="">
							<GrUserWorker />
						</div>
						<div>Empleados</div>
					</Link>
				</div>
			</div>
		</>
	);
}
