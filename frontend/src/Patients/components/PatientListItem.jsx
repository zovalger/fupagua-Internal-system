import { useNavigate } from "react-router-dom";

import styles from "./PatientListItem.module.scss";

export function PatientListItem({ data }) {
	const navigate = useNavigate();
	const { id, name, representative, historyNumber } = data;

	// const {name,age,representative} = data

	return (
		<div
			className={styles.container}
			onClick={() => {
				navigate(`/pacientes/${id}`);
			}}
		>
			<div className={styles.title}>{name}</div>
			<div>Número de historia: {historyNumber}</div>

			{representative ? <div>Representante: {representative.name}</div> : null}
		</div>
	);
}
