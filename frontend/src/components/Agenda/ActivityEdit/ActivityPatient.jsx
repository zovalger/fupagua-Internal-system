import styles from "./ActivityPatient.module.scss";
import { BsPeople } from "react-icons/bs";

export default function ActivityPatient() {
	return (
		<div className={styles.container}>
			<div className={styles.icon}>
				<BsPeople />
			</div>
			<div className={styles.text}>
				<div>representante: fulanito detal</div>
				<div>paciente: marianito</div>
			</div>
		</div>
	);
}
