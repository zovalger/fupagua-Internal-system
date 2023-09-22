import styles from "./Activity.module.scss";

export default function Activity({ data }) {
	return (
		<div className={styles.container}>
			<div className={styles.title}>{data.title}</div>
			<div className={styles.description}>{data.description}</div>
			{/* <div className={styles.hours}>10:00 am - 12:00 pm</div> */}
		</div>
	);
}
