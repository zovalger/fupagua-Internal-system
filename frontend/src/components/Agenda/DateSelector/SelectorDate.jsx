import styles from "./SelectorDate.module.scss";

import { TbChevronRight, TbChevronLeft } from "react-icons/tb";

export default function SelectorDate() {
	return (
		<div className={styles.container}>
			<button className="back">
				<TbChevronLeft />
			</button>

			<div className={styles.items}>
				<div>16</div>
				<div>17</div>
				<div>18</div>
			</div>

			<button className="next">
				<TbChevronRight />
			</button>
		</div>
	);
}
