import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import toast from "react-hot-toast";

import { useAppData } from "../../context/AppContext";

import Nav from "../../components/common/Nav";
import { VideoLinkForm } from "../../components/LandingEdit/VideoLinkForm";
import {
	getVideoLinkCategoriesRequest,
	getVideoLinksRequest,
} from "../../api/videoLinks";

export function LandingEditMain() {
	const { toggleAsideActive } = useAppData();
	const [onCreate, setOnCreate] = useState(false);
	const [videoLinksData, setVideoLinksData] = useState([]);
	const [categoriesData, setCategoriesData] = useState([]);

	const toCreate = (bool) => setOnCreate(bool);

	const refreshData = async () => {
		const { data: cate } = await getVideoLinkCategoriesRequest();

		setCategoriesData(cate.map((c) => c.title));

		const myPromise = getVideoLinksRequest();

		toast.promise(
			myPromise,
			{
				loading: "cargando datos",
				success: (res) => {
					console.log(res);
					setVideoLinksData(res.data);
				},
				error: (err) => `This just happened: ${err.toString()}`,
			},
			{
				success: {
					duration: 10,
				},
			}
		);
	};

	useEffect(() => {
		refreshData();
	}, []);

	return (
		<>
			<Nav
				leftIcon={<RxHamburgerMenu />}
				leftFuctionOnClick={toggleAsideActive}
				title={<div>Editor de Pagina</div>}
				rightButtons={
					<>
						{/* <button onClick={refreshData}>
							<AiOutlineReload />
						</button> */}

						{/* <Link to={"/"}>
							<button>
								<AiOutlinePlus />
							</button>
						</Link> */}
					</>
				}
			/>

			{/*********************************************************************
			
												formulario para buscar libros 
				
			*********************************************************************/}
			<div className="container mt-2">
				<div className="row">
					<div className="col-12">
						<button
							className="btn btn-outline-primary w-100"
							onClick={() => toCreate(true)}
						>
							+
						</button>
						{onCreate ? (
							<VideoLinkForm
								create={true}
								categoriesDataList={[]}
								onCancelButton={() => toCreate(false)}
							/>
						) : null}
					</div>
				</div>
			</div>
			<div className="scrollInSpacework">
				<div className="container ">
					{videoLinksData.map((v) => (
						<VideoLinkForm data={v} categoriesDataList={categoriesData} />
					))}
				</div>
			</div>
		</>
	);
}
