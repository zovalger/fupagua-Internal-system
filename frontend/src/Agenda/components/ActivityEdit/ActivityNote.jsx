import styles from "./ActivityNote.module.scss";

import { BiNote } from "react-icons/bi";

export default function ActivityNote({
	content,

	onInputChange,
}) {
	return (
		<div className={styles.container}>
			<div className={styles.icon}>
				<BiNote />
			</div>
			<textarea
				id=""
				name="description"
				onChange={onInputChange}
				value={content}
				placeholder="nota de la actividad"
			></textarea>
		</div>
	);
}
