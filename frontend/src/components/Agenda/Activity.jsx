import styles from "./Activity.module.scss";

export default function Activity() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>titulo de la actividad</div>
			<div className={styles.description}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</div>
		</div>
	);
}
