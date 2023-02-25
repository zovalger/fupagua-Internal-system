import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineReload } from "react-icons/ai";
import toast from "react-hot-toast";

import { useAppData } from "../../../context/AppContext";

import Nav from "../../../components/common/Nav";
import { BiChevronLeft } from "react-icons/bi";
import { getBookRecommendedsRequest } from "../../../api/bookRecommended";
import { BookRecommendedItem } from "../../../components/LandingEdit/BookRecommended/BookRecommendedItem";

export function BookRecommendedList() {
	const navigate = useNavigate();
	const { toggleAsideActive } = useAppData();
	const [BookRecommended, setBookRecommended] = useState([]);

	// const [patientsQuery, setPatientsQuery] = useState([]);
	// const [inQuery, setInQuery] = useState(false);

	const findData = async (query) => {
		try {
			const myPromise = getBookRecommendedsRequest(query);

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
						setBookRecommended(res.data);
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
				return toast.error(res.data.message, { duration: 5 });
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
				title={"Libros recomendados"}
				rightButtons={
					<>
						<button onClick={() => findData()}>
							<AiOutlineReload />
						</button>

						<Link to={"/landing-edit/libros_recomendados/añadir"}>
							<button>
								<AiOutlinePlus />
							</button>
						</Link>
					</>
				}
			/>

			<div className="scrollInSpacework">
				<div className="container pt-2">
					{/* <PatientSeachForm
						makeQuery={findData}
						setInQuery={setInQuery}
						onClearValue={setPatientsQuery}
					/> */}

					{BookRecommended.map((v) => (
						<BookRecommendedItem data={v} key={v.id} />
					))}

					{/* {inQuery && patientsQuery.length > 0
						? patientsQuery.map(insertarItemInList)
						: videoLinks.map(insertarItemInList)} */}
				</div>
			</div>
		</>
	);
}
