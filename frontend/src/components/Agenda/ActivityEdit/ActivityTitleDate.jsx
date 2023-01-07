import styles from "./ActivityTitleDate.module.scss";

import { RxDividerVertical } from "react-icons/rx";

export default function ActivityTitleDate() {
	return (
		<div className={styles.container}>
			<input
				className={styles.title}
				type="text"
				placeholder="titulo de la actividad"
			/>
			<div className={styles.timeSelector}>
				<span>Inicio</span>

				<span>
					<input type="date" />
					<input type="time" />
				</span>
			</div>

			<div className={styles.timeSelector}>
				<span>Final</span>

				<span>
					<input type="date" />
					<input type="time" />
				</span>
			</div>

			<div className={styles.typeTime}>
				<span>
					<button className={styles.active}>hora</button>
					<RxDividerVertical />
					<button>todo el dia</button>
				</span>
			</div>
		</div>
	);
}
