import { useNavigate } from "react-router-dom";

import styles from "./PatientListItem.module.scss";

export function PatientListItem({ data }) {
	const navigate = useNavigate();
	const { name, representative } = data;

	const id = 1;
	// const {name,age,representative} = data

	return (
		<div
			className={styles.container}
			onClick={() => {
				navigate(`/pacientes/${id}`);
			}}
		>
			<div className={styles.title}>{name}</div>

			{(representative)?
			<div>Representante: {representative.name}</div>
		:null	
		}
		</div>
	);
}
