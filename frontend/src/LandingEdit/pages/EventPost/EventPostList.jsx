import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineReload } from "react-icons/ai";
import toast from "react-hot-toast";

import Nav from "../../../UI/components/Nav";

import { BiChevronLeft } from "react-icons/bi";
import { getEventPostsRequest } from "../../../api/eventPost";
import { ItemListImagenTitleDescrip } from "../../../UI/components/ItemListImagenTitleDescrip";
import UserContext from "../../../context/UserContext";

export function EventPostList() {
	const { user } = useContext(UserContext);

	const navigate = useNavigate();

	const [EventPosts, setEventPosts] = useState([]);
	const pathTo = "/landing-edit/eventos-actividades";

	// const [patientsQuery, setPatientsQuery] = useState([]);
	// const [inQuery, setInQuery] = useState(false);

	const findData = async (query) => {
		try {
			const myPromise = getEventPostsRequest(query);

			toast.promise(
				myPromise,
				{
					// id: "refreshDataPatients",
					loading: "cargando datos",
					success: (res) => {
						console.log(res);

						setEventPosts(res.data);

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
						duration: 3,
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

	return (
		<>
			<Nav
				leftIcon={<BiChevronLeft />}
				leftFuctionOnClick={() => navigate("/landing-edit")}
				title={"Actividades y eventos"}
				rightButtons={
					<>
						<button onClick={() => findData()}>
							<AiOutlineReload />
						</button>
						{user && user.permissions.includes("landingEdit") && (
							<Link to={`${pathTo}/añadir`}>
								<button>
									<AiOutlinePlus />
								</button>
							</Link>
						)}
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

					{EventPosts.map((i) => (
						<>
							<ItemListImagenTitleDescrip
								onClick={() => {
									if (user && user.permissions.includes("landingEdit"))
										navigate(`${pathTo}/${i.id}`);
								}}
								imgfile={i.imgfile}
								title={i.title}
								description={<>{i.description}</>}
								key={i.id}
							/>
						</>
					))}

					{/* {inQuery && patientsQuery.length > 0
						? patientsQuery.map(insertarItemInList)
						: videoLinks.map(insertarItemInList)} */}
				</div>
			</div>
		</>
	);
}
