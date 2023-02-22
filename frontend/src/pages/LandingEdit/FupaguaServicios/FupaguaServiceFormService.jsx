import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiTrash } from "react-icons/bi";
import toast from "react-hot-toast";

import Nav from "../../../components/common/Nav";


import { FormFupaguaService } from "../../../components/LandingEdit/FupaguaServicios/FormFupaguaService";
import { createFupaguaServiceRequest, getFupaguaServiceRequest, updateFupaguaServiceRequest } from "../../../api/fupaguaService";

export function FupaguaServiceFormService({ create }) {
	const navigate = useNavigate();
	const params = useParams();
	const [isSubmiting, setIsSubmitin] = useState(false);

	const [fupaguaserviceData, setFupaguaserviceData] = useState({
		title: "",
		description: "",
		url: "",
	});

	const getData = async () => {
		const res = await getFupaguaServiceRequest(params.id);

		const { title, description,  } = res.data;

		setFupaguaserviceData({ title, description, url });
	};

	useEffect(() => {
		// si estamos en el modo crear no se ejecuta, si no buscamos los datos del registro

		if (create) return;

		getData();
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		if (isSubmiting) return;
		setIsSubmitin(true);

		const body = {};
		body.videolink = fupaguaserviceData;

		try {
			const myPromise = create
				? createFupaguaServiceRequest(body)
				: updateFupaguaServiceRequest(params.id, body);

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
		setFupaguaserviceData({
			...fupaguaserviceData,
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

		if (op) navigate("/landing-edit/servicios");
	};

	return (
		<>
			<Nav
				leftIcon={<BiChevronLeft />}
				leftFuctionOnClick={onExit}
				title={create ? "Añadir servicio" : "Editar servicio"}
				// rightButtons={

				// }
			/>

			<div className="scrollInSpacework">
				<div className="container">
					{/* {!create ? <BookImageSlider book={book} /> : null} */}

					<FormFupaguaService
						create={create}
						// datos
						videolinkData={fupaguaserviceData}
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
