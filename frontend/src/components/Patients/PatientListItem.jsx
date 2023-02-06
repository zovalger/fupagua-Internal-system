import styles from "./PatientListItem.module.scss";

export function PatientListItem({ data }) {
	// const {name,age,representative} = data

	return (
		<div className={styles.container}>
			<div className={styles.title}>nombre completo niño</div>
			<div>Representante: {"nombre del representante"}</div>
		</div>
	);
}
