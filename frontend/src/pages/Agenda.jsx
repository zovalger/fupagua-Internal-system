import styles from "../components/Agenda/Agenda.module.scss";
import Activity from "../components/Agenda/Activity";
import DateSelectorAgenda from "../components/Agenda/DateSelector/DateSelectorAgenda";
import { RxHamburgerMenu } from "react-icons/rx";
import Nav from "../components/common/Nav";
import { Link } from "react-router-dom";
import { useAppData } from "../context/AppContext";

const a = [
	{
		id: 2,
		title: "actividades administrativas",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsam a assumenda eius incidunt ea, velit provident quis dignissimos voluptates asperiores qui molestias, quae tempora magni dolorum officiis sequi architecto!",
	},
	{
		id: 1,
		title: "fiesta",
		description: "Lorem ipsum dolor sit amet consectetitecto!",
	},
];

export function Agenda() {
	const { toggleAsideActive } = useAppData();
	return (
		<>
			<Nav
				leftIcon={<RxHamburgerMenu />}
				leftFuctionOnClick={toggleAsideActive}
				title={"agenda"}
			/>

			<div className={styles.container}>
				<DateSelectorAgenda />

				<h3>hoy</h3>

				{a.map((value) => {
					return (
						<Link to={`/agenda/${value.id}`} key={value.id}>
							<Activity data={value} />
						</Link>
					);
				})}

				<button className={styles.addBtn}>+</button>
			</div>
		</>
	);
}
