import styles from "./Agenda.module.scss";
import Activity from "../components/Activity";
import DateSelectorAgenda from "../components/DateSelector/DateSelectorAgenda";
import { RxHamburgerMenu } from "react-icons/rx";
import Nav from "../../UI/components/Nav";
import { useAppData } from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getActivitiesRequest } from "../../api/activities";

export function Agenda() {
	const [activities, setActivities] = useState([]);
	const { toggleAsideActive } = useAppData();

	const navigate = useNavigate();

	useEffect(() => {
		const fillList = async () => {
			const res = await getActivitiesRequest();
			console.log(res);
			setActivities(res.data);
		};

		fillList();
	}, []);

	return (
		<>
			<Nav
				leftIcon={<RxHamburgerMenu />}
				leftFuctionOnClick={toggleAsideActive}
				title={"Agenda"}
			/>

			<div className={styles.container}>
				{/* <DateSelectorAgenda /> */}

				<h3>todas las actividades</h3>

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
