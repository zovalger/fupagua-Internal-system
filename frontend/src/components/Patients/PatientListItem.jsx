import { useNavigate } from "react-router-dom";

import styles from "./PatientListItem.module.scss";

export function PatientListItem({ data }) {
	const navigate = useNavigate();

	const id = 1;
	// const {name,age,representative} = data

	return (
		<div
			className={styles.container}
			onClick={() => {
				navigate(`/pacientes/${id}`);
			}}
		>
			<div className={styles.title}>nombre completo niño</div>
			<div>Representante: {"nombre del representante"}</div>
		</div>
	);
}
