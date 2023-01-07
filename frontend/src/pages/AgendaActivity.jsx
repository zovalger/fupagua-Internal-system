import styles from "../components/Agenda/AgendaActivity.module.scss";
import { BiChevronLeft, BiTrash } from "react-icons/bi";
import Nav from "../components/common/Nav";
import ActivityTitleDate from "../components/Agenda/ActivityEdit/ActivityTitleDate";
import ActivityNote from "../components/Agenda/ActivityEdit/ActivityNote";
import ActivityPatient from "../components/Agenda/ActivityEdit/ActivityPatient";

import {Link} from 'react-router-dom'

export function AgendaActivity() {
	return (
		<>
			<Nav
				leftIcon={
					<Link to ="/agenda"> 
						<BiChevronLeft />
					</Link>
				}
				title={"edicion de actividad"}
				rightButtons={[<BiTrash />]}
			/>

			<div className={styles.container}>
				<ActivityTitleDate />

				<ActivityNote />

				<ActivityPatient />

				<div className={styles.formControls}>
					<button>cancelar</button>
					<button>guardar</button>
				</div>
				{/* <button className={styles.addBtn}>gua</button> */}
			</div>
		</>
	);
}
