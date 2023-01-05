import styles from "./Person.module.scss";

export default function Person({data}) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.title}>{data.name}</div>
				<div className={styles.description}>
					<div>Lorem ipsum dolor sit.</div>
					<div>Lorem ipsum dolor sit.</div>
				</div>
			</div>
		</>
	);
}
