import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlus, AiOutlineReload } from "react-icons/ai";
import toast from "react-hot-toast";

import { useAppData } from "../../context/AppContext";

import Nav from "../../components/common/Nav";
import { PatientSeachForm } from "../../components/Patients/PatientSeachForm";
import { PatientListItem } from "../../components/Patients/PatientListItem";
import { getPatientsRequest } from "../../api/patients";
import {
	getVideoLinkRequest,
	getVideoLinksRequest,
} from "../../api/videoLinks";
import { VideoLink } from "../../components/LandingEdit/VideoLink";

export function VideoLinkList() {
	const { toggleAsideActive } = useAppData();
	const [videoLinks, setVideoLinks] = useState([]);

	// const [patientsQuery, setPatientsQuery] = useState([]);
	// const [inQuery, setInQuery] = useState(false);

	const findData = async (query) => {
		try {
			const myPromise = getVideoLinksRequest(query);

			toast.promise(
				myPromise,
				{
					// id: "refreshDataPatients",
					loading: "cargando datos",
					success: (res) => {
						console.log(res);

						// if (query) {
						// 	setInQuery(true);
						// 	setPatientsQuery(res.data);
						// } else {
						setVideoLinks(res.data);
						// }

						if (res.data.length <= 0)
							return toast.error(
								query
									? "No coincide ningun elemento"
									: "no hay datos disponibles",
								{
									duration: 2500,
								}
							);
					},
					error: (err) => `This just happened: ${err.toString()}`,
				},
				{
					success: {
						duration: 10,
					},
					error: {
						duration: 4,
					},
				}
			);
		} catch (error) {
			console.log(error);
			const { response: res } = error;

			if (res.status === 404)
				return toast.error(res.data.message, { duration: 2000 });
		}
	};

	useEffect(() => {
		findData();
	}, []);

	// const insertarItemInList = (patient) => (
	// 	<PatientListItem data={patient} key={patient.id} />
	// );

	return (
		<>
			<Nav
				leftIcon={<RxHamburgerMenu />}
				leftFuctionOnClick={toggleAsideActive}
				title={<div>Videos</div>}
				rightButtons={
					<>
						<button onClick={() => findData()}>
							<AiOutlineReload />
						</button>

						<Link to={"/landing-edit/videos/añadir"}>
							<button>
								<AiOutlinePlus />
							</button>
						</Link>
					</>
				}
			/>

			<div className="scrollInSpacework">
				<div className="container">
					{/* <PatientSeachForm
						makeQuery={findData}
						setInQuery={setInQuery}
						onClearValue={setPatientsQuery}
					/> */}

					{videoLinks.map((v) => (
						<VideoLink data={v} key={v.id} />
					))}

					{/* {inQuery && patientsQuery.length > 0
						? patientsQuery.map(insertarItemInList)
						: videoLinks.map(insertarItemInList)} */}
				</div>
			</div>
		</>
	);
}
