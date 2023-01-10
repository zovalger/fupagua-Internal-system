import styles from "./ActivityTitleDate.module.scss";

import { RxDividerVertical } from "react-icons/rx";

export default function ActivityTitleDate({
	title,
	dateStart,
	dateEnd,
	timeStart,
	timeEnd,
	onInputChange,
}) {
	return (
		<div className={styles.container}>
			<input
				className={styles.title}
				type="text"
				placeholder="titulo de la actividad"
				value={title}
				name="title"
				onChange={onInputChange}
			/>
			<div className={styles.timeSelector}>
				<span>Inicio</span>

				<span>
					<input
						type="date"
						name="dateStart"
						value={dateStart}
						onChange={onInputChange}
					/>
					{/* <input
						type="time"
						name="timeStart"
						value={timeStart}
						onChange={onInputChange}
					/> */}
				</span>
			</div>

			<div className={styles.timeSelector}>
				<span>Final</span>

				<span>
					<input
						type="date"
						name="dateEnd"
						value={dateEnd}
						onChange={onInputChange}
					/>
					{/* <input
						type="time"
						name="timeEnd"
						value={timeEnd}
						onChange={onInputChange}
					/> */}
				</span>
			</div>

			{/* <div className={styles.typeTime}>
				<span>
					<button className={styles.active} type="button">
						hora
					</button>

					<RxDividerVertical />

					<button type="button">todo el dia</button>
				</span>
			</div> */}
		</div>
	);
}
