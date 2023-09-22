import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import toast from "react-hot-toast";

import Nav from "../../../UI/components/Nav";

import { FormEventPost } from "../../components/EventPost/FormEventPost";
import {
	createEventPostRequest,
	deleteEventPostRequest,
	getEventPostRequest,
	updateEventPostRequest,
} from "../../../api/eventPost";

export function EventPostFormEvent({ create }) {
	const pathTo = "/landing-edit/eventos-actividades";

	const navigate = useNavigate();
	const params = useParams();
	const [isSubmiting, setIsSubmitin] = useState(false);

	const [Data, setData] = useState({
		title: "",
		description: "",
		toDate: Date.now(),
		link: "",
	});

	const getData = async () => {
		const { data } = await getEventPostRequest(params.id);

		data.toDate = new Date(data.toDate);

		setData(data);
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

		const body = Data;

		try {
			const myPromise = create
				? createEventPostRequest(body)
				: updateEventPostRequest(params.id, body);

			console.log(myPromise);

			toast.promise(myPromise, {
				loading: "guardando",
				success: (res) => {
					console.log(res);

					setTimeout(() => {
						navigate(pathTo);
					}, 500);

					return create ? "Añadido correctamente" : "Cambios guardados";
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

	const onChange = ({ target: { name, value } }) =>
		setData({
			...Data,
			[name]: value,
		});

	const onDelete = async () => {
		if (!window.confirm("Seguro que quiere eliminar la publicación?")) return;

		try {
			// const d = confirm("esta seguro de elminar el libro?");

			const myPromise = deleteEventPostRequest(params.id);

			toast.promise(myPromise, {
				loading: "eliminando",
				success: (res) => {
					console.log(res);
					setTimeout(() => {
						navigate(pathTo);
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

		if (op) navigate(pathTo);
	};

	return (
		<>
			<Nav
				leftIcon={<BiChevronLeft />}
				leftFuctionOnClick={onExit}
				title={create ? "Añadir evento" : "Editar evento"}
				// rightButtons={

				// }
			/>

			<div className="scrollInSpacework">
				<div className="container pt-2">
					{/* {!create ? <BookImageSlider book={book} /> : null} */}

					<FormEventPost
						create={create}
						// datos
						Data={Data}
						setData={setData}
						// metodos
						onSubmit={onSubmit}
						onChange={onChange}
						onDelete={onDelete}
						onExit={onExit}
					/>
				</div>
			</div>
		</>
	);
}
