import styles from "./AsidePanelOptions.module.scss";

import { IoLibraryOutline,IoHomeOutline } from "react-icons/io5";
import { BsCalendarWeek,BsCardText  } from "react-icons/bs";


import { RxHamburgerMenu } from "react-icons/rx";

import ListOptionItem from "./ListOption_item";
import Nav from "../Nav";
import { useAppData } from "../../../context/AppContext";

function AsidePanelOptions() {
	const { asidePanelActive, toggleAsideActive } = useAppData();

	return (
		<div
			className={`${styles.overlay}  ${!asidePanelActive ? styles.hidden : ""}`}
			onClick={toggleAsideActive}
		>
			<div className={styles.panel} onClick={(e) => e.stopPropagation()}>
				<Nav
					leftIcon={<RxHamburgerMenu />}
					leftFuctionOnClick={toggleAsideActive}
					title={"Menu"}
				/>

				<ListOptionItem
					url={"/"}
					icon={<IoHomeOutline />}
					text="inicio"
					onClick={toggleAsideActive}
				/>

				<ListOptionItem
					url={"/agenda"}
					icon={<BsCalendarWeek />}
					text="Agenda"
					onClick={toggleAsideActive}
				/>

				<ListOptionItem
					url={"/biblioteca"}
					icon={<IoLibraryOutline />}
					text="Biblioteca"
					onClick={toggleAsideActive}
				/>

<ListOptionItem
					url={"/biblioteca/imprimir-fichas"}
					icon={<BsCardText />}
					text="Fichas"
					onClick={toggleAsideActive}
				/>

				{/* <ListOptionItem icon={<BsFillPeopleFill />} text="Personas" /> */}
			</div>
		</div>
	);
}

export default AsidePanelOptions;
