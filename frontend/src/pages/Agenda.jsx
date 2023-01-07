import styles from "../components/Agenda/Agenda.module.scss";
import Activity from "../components/Agenda/Activity";
import DateSelectorAgenda from "../components/Agenda/DateSelector/DateSelectorAgenda";
import { RxHamburgerMenu } from "react-icons/rx";
import Nav from "../components/common/Nav";

const a = [{ id: 2 }, { id: 1 }];

export function Agenda() {
	return (
		<>
			<Nav leftIcon={<RxHamburgerMenu />} title={"agenda"} />

			<div className={styles.container}>
				<DateSelectorAgenda />

				<h3>hoy</h3>

				{a.map((value) => {
					return <Activity key={value.id} data={value} />;
				})}

				<button className={styles.addBtn}>+</button>
			</div>
		</>
	);
}
