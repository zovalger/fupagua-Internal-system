import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiTrash } from "react-icons/bi";
import toast from "react-hot-toast";

import Nav from "../../../components/common/Nav";

import {
	createVideoLinkRequest,
	deleteVideoLinkRequest,
	getVideoLinkCategoriesRequest,
	getVideoLinkRequest,
	updateVideoLinkRequest,
} from "../../../api/videoLinks";

import { FormVideoLink } from "../../../components/LandingEdit/VideoLinks/FormVideoLink";

export function VideoLinkFormVideo({ create }) {
	const navigate = useNavigate();
	const params = useParams();
	const [isSubmiting, setIsSubmitin] = useState(false);

	const [categoriesList, setCategoriesList] = useState([]);
	const [categoryData, setCategoryData] = useState("");
	const [videolinkData, setVideolinkData] = useState({
		title: "",
		description: "",
		url: "",
	});

	const getData = async () => {
		const res = await getVideoLinkRequest(params.id);

		const { title, description, url, categoryvideo } = res.data;

		setVideolinkData({ title, description, url });
		setCategoryData(categoryvideo.title);
	};

	useEffect(() => {
		// si estamos en el modo crear no se ejecuta, si no buscamos los datos del registro
		(async () => {
			const resCategoriesList = await getVideoLinkCategoriesRequest();
			setCategoriesList(resCategoriesList.data.map((c) => c.title));
		})();

		if (create) return;

		getData();
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		if (isSubmiting) return;
		setIsSubmitin(true);

		const body = {};
		body.videolink = videolinkData;
		body.category = categoryData;

		try {
			const myPromise = create
				? createVideoLinkRequest(body)
				: updateVideoLinkRequest(params.id, body);

			console.log(myPromise);

			toast.promise(myPromise, {
				loading: "guardando",
				success: (res) => {
					console.log(res);

					setTimeout(() => {
						navigate("/landing-edit/videos");
					}, 500);

					return create ? "Añadido correctamente" : "cambios guardados";
				},
				error: (err) => {
					setIsSubmitin(false);
					return `This just happened: ${err.toString()}`;
				},
			});
		} catch (error) {
			setIsSubmitin(false);
			console.log(error);
		}
	};

	const onChangeVideoData = ({ target: { name, value } }) =>
		setVideolinkData({
			...videolinkData,
			[name]: value,
		});

	const deleteItem = async () => {
		if (!window.confirm("Seguro que quiere eliminar el libro?")) return;

		try {
			// const d = confirm("esta seguro de elminar el libro?");

			const myPromise = deleteVideoLinkRequest(params.id);

			toast.promise(myPromise, {
				loading: "eliminando",
				success: (res) => {
					console.log(res);
					setTimeout(() => {
						navigate("/landing-edit/videos");
					}, 1000);
					// navigate("/biblioteca");
					return "Registro eliminado";
				},
				error: (err) => `This just happened: ${err.toString()}`,
			});
		} catch (error) {
			console.log(error);
			const { response: res } = error;

			if (res.status === 404)
				return toast.error(res.data.message, { duration: 2000 });
		}
	};

	const onExit = () => {
		const op = window.confirm(
			"seguro que quiere salir? se perderan todos los cambios realizados"
		);

		if (op) navigate("/landing-edit/videos");
	};

	return (
		<>
			<Nav
				leftIcon={<BiChevronLeft />}
				leftFuctionOnClick={onExit}
				title={create ? "Añadir video" : "Editar video"}
				// rightButtons={

				// }
			/>

			<div className="scrollInSpacework">
				<div className="container">
					{/* {!create ? <BookImageSlider book={book} /> : null} */}

					<FormVideoLink
						create={create}
						// datos
						videolinkData={videolinkData}
						categoryData={categoryData}
						categoriesList={categoriesList}
						// metodos
						onSubmit={onSubmit}
						onChangeVideoData={onChangeVideoData}
						setCategoryData={setCategoryData}
						deleteItem={deleteItem}
						onExit={onExit}
					/>
				</div>
			</div>
		</>
	);
}
