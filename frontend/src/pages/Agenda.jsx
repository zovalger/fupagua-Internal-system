import styles from "../components/Agenda/Agenda.module.scss";
import Activity from "../components/Agenda/Activity";
import DateSelectorAgenda from "../components/Agenda/DateSelector/DateSelectorAgenda";

export function Agenda() {
	return (
		<>
			<nav>
				<button></button>
				<div>agenda</div>
			</nav>

			<DateSelectorAgenda/>

			<h3>hoy</h3>

			<Activity />
			<Activity />
			<Activity />
			<Activity />
			<Activity />

			<button>+</button>
		</>
	);
}
