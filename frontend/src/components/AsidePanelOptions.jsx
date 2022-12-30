import styles from "./AsidePanelOptions.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillPeopleFill, BsCalendar2Week } from "react-icons/bs";
import ListOptionItem from "./ListOption_item";

function AsidePanelOptions() {
	return (
		<div className={false ? styles.container_active : styles.container_hidden}>
			<div className={styles.panel}>
				<div className={styles.nav}>
					<ListOptionItem icon={<AiOutlineMenu />} text="Menu" />
				</div>
				<ListOptionItem icon={<BsFillPeopleFill />} text="Personas" />
				<ListOptionItem icon={<BsCalendar2Week />} text="Agenda" />
			</div>
		</div>
	);
}

export default AsidePanelOptions;
