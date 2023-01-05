import styles from "./DateSelectorAgenda.module.scss";
import { AiOutlineCalendar } from "react-icons/ai";
import DateButton from "./DateButton";
import SelectorDate from "./SelectorDate";

export default function DateSelectorAgenda(params) {
	return (
		<div className={styles.container}>
			<div className={styles.SelectorAgrupador}>
				<DateButton>diario</DateButton>
				<DateButton selected={true}>semanal</DateButton>
				<DateButton>mensual</DateButton>
			</div>

			<div className={styles.dateSelector}>
				<div className={styles.conjunto}>
					<AiOutlineCalendar /> <span>diciembre 2022</span>
				</div>

				<SelectorDate />
			</div>
		</div>
	);
}
