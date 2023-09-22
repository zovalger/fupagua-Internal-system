import { useEffect, useState } from "react";
import { MdBoy, MdFamilyRestroom, MdGirl } from "react-icons/md";
import style from "./PatientStadistic.module.scss";

const PatientStadistic = ({ patients }) => {
	const [stadistics, setStadistics] = useState(null);

	useEffect(() => {
		const male = [];
		const female = [];
		const representatives = [];

		patients.map((p) => {
			if (p.sex === "female") female.push(p);
			else male.push(p);

			if (p.representativeId) {
				const index = representatives.findIndex(
					(r) => r === p.representativeId
				);

				if (index <= -1) representatives.push(p.representativeId);
			}

			return null;
		});
		setStadistics({ male, female, representatives });
	}, [patients]);

	if (!stadistics) return;

	return (
		<div className={style.container}>
						<div>Registros: {patients.length}</div>

			<div>
				<span>
					<MdFamilyRestroom />
				</span>
				{stadistics.representatives.length}
			</div>
			<div>
				<span>
					<MdBoy />
				</span>
				{stadistics.male.length}
			</div>
			<div>
				<span>
					<MdGirl />
				</span>
				{stadistics.female.length}
			</div>

		</div>
	);
};

export default PatientStadistic;
