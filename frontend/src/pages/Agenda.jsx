import styles from "./Agenda.module.scss";
import Activity from "../components/Agenda/Activity";
import DateSelectorAgenda from "../components/Agenda/DateSelector/DateSelectorAgenda";
import { RxHamburgerMenu } from "react-icons/rx";
import Nav from "../components/common/Nav";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getActivitiesRequest } from "../api/activities";

export function Agenda() {
	const [activities, setActivities] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fillList = async () => {
			const res = await getActivitiesRequest();
			console.log(res);
			setActivities(res.data);
		};

		fillList();
	}, []);

	console.log(activities);



	return (
		<>
			<Nav leftIcon={<RxHamburgerMenu />} title={"agenda"} />

			<div className={styles.container}>
				{/* <DateSelectorAgenda /> */}

				<h3>hoy</h3>

				{activities.map((value) => {
					return (
						<Link to={`/agenda/${value.id}`} key={value.id}>
							<Activity data={value} />
						</Link>
					);
				})}

				<button
					className={styles.addBtn}
					onClick={() => {
						navigate("/agenda/nueva-actividad");
					}}
				>
					+
				</button>
			</div>
		</>
	);
}
