import styles from "./AsidePanelOptions.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillPeopleFill, BsCalendar2Week } from "react-icons/bs";
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
					icon={<BsCalendar2Week />}
					text="inicio"
					onClick={toggleAsideActive}
				/>

				<ListOptionItem
					url={"/agenda"}
					icon={<BsCalendar2Week />}
					text="Agenda"
					onClick={toggleAsideActive}
				/>

				<ListOptionItem icon={<BsFillPeopleFill />} text="Personas" />
			</div>
		</div>
	);
}

export default AsidePanelOptions;
