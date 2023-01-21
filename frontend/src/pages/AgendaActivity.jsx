import styles from "./styles/AgendaActivity.module.scss";
import { BiChevronLeft, BiTrash } from "react-icons/bi";
import Nav from "../components/common/Nav";
import ActivityTitleDate from "../components/Agenda/ActivityEdit/ActivityTitleDate";
import ActivityNote from "../components/Agenda/ActivityEdit/ActivityNote";
import ActivityPatient from "../components/Agenda/ActivityEdit/ActivityPatient";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
	getActivityRequest,
	createActivityRequest,
	updateActivityRequest,
	deleteActivityRequest,
} from "../api/activities";

import { toInputDate } from "../utility";
import { toast } from "react-hot-toast";

export function AgendaActivity({ create }) {
	const navigate = useNavigate();

	const [content, setContent] = useState({
		title: "",
		description: "",
		dateStart: "",
		timeStart: "",
		dateEnd: "",
		timeEnd: "",
	});

	const [editing, setEditing] = useState(false);

	const params = useParams();

	useEffect(() => {
		// si estamos en el modo crear no se ejecuta, si no buscamos los datos del registro
		if (create) return;
		const fillInputs = async () => {
			const res = await getActivityRequest(params.id);
			// console.log(res);

			const { dateStart, dateEnd } = res.data;

			const data = res.data;

			data.dateStart = toInputDate(new Date(dateStart));
			data.dateEnd = toInputDate(new Date(dateEnd));

			setContent(data);
		};

		fillInputs();
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();

		const { title, description } = content,
			paylot = { title: title.trim(), description: description.trim() };

		paylot.dateStart = new Date(content.dateStart);
		paylot.dateEnd = new Date(content.dateEnd);

		console.log(paylot);

		// const hora = content.timeStart.split(":");

		// start.setHours(hora[0], hora[1]);

		const res = create
			? await createActivityRequest(paylot)
			: await updateActivityRequest(params.id, paylot);

		console.log(res);

		if (res.status === 200) {
			const message = create ? "Actividad añadida" : "cambios guardados";

			toast.success(message);
		}

		navigate("/agenda");
	};

	const onInputChange = ({ target: { name, value } }) => {
		console.log(name, value);
		setContent({
			...content,
			[name]: value,
		});
	};

	// const onChangeDate = (date) => setContent({ ...content, date });

	const deleteActivity = async () => {
		const res = await deleteActivityRequest(params.id);

		console.log(res);
					toast.success("Actividad eliminada");

		navigate("/agenda");
	};

	return (
		<>
			<Nav
				leftIcon={
					<Link to="/agenda">
						<BiChevronLeft />
					</Link>
				}
				title={"Edicion de actividad"}
				rightButtons={
					<button onClick={deleteActivity}>
						<BiTrash />
					</button>
				}
			/>

			<div className={styles.container}>
				<form method="post" onSubmit={onSubmit}>
					<ActivityTitleDate
						title={content.title}
						dateStart={content.dateStart}
						dateEnd={content.dateEnd}
						timeStart={content.timeStart}
						timeEnd={content.timeEnd}
						onInputChange={onInputChange}
					/>

					<ActivityNote
						content={content.description}
						onInputChange={onInputChange}
					/>

					{/* <ActivityPatient /> */}

					<div className={styles.formControls}>
						<button type="button" onClick={() => navigate("/agenda")}>
							cancelar
						</button>

						<button>guardar</button>
					</div>
				</form>
				{/* <button className={styles.addBtn}>gua</button> */}
			</div>
		</>
	);
}
