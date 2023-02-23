import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiTrash } from "react-icons/bi";
import toast from "react-hot-toast";

import Nav from "../../../components/common/Nav";

import { FormFupaguaService } from "../../../components/LandingEdit/FupaguaServicios/FormFupaguaService";
import {
	createFupaguaServiceRequest,
	deleteFupaguaServiceRequest,
	getFupaguaServiceRequest,
	getFupaguaServicesRequest,
	updateFupaguaServiceRequest,
} from "../../../api/fupaguaService";
import { FormFupaguaEmpleados } from "../../../components/LandingEdit/FupaguaEmpleados/FormFupaguaEmpleados";
import {
	createFupaguaEmpleadoRequest,
	deleteFupaguaEmpleadoRequest,
	getFupaguaEmpleadoRequest,
	updateFupaguaEmpleadoRequest,
} from "../../../api/fupaguaEmpleado";

export function FupaguaEmpleadosFormEmpleados({ create }) {
	const navigate = useNavigate();
	const params = useParams();
	const [isSubmiting, setIsSubmitin] = useState(false);

	const [Data, setData] = useState({
		description: "",
	});

	const [serviceList, setServiceList] = useState([]);

	const getData = async () => {
		const res = await getFupaguaEmpleadoRequest(params.id);

		setData(res.data);
	};

	useEffect(() => {
		getFupaguaServicesRequest().then((resService) =>
			setServiceList(resService.data)
		);

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
				? createFupaguaEmpleadoRequest(body)
				: updateFupaguaEmpleadoRequest(params.id, body);

			console.log(myPromise);

			toast.promise(myPromise, {
				loading: "guardando",
				success: (res) => {
					console.log(res);

					setTimeout(() => {
						navigate("/landing-edit/empleados");
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

	const onChange = ({ target: { name, value } }) =>
		setData({
			...Data,
			[name]: value,
		});

	const onDelete = async () => {
		if (!window.confirm("Seguro que quiere eliminar?")) return;

		try {
			// const d = confirm("esta seguro de elminar el libro?");

			const myPromise = deleteFupaguaEmpleadoRequest(params.id);

			toast.promise(myPromise, {
				loading: "eliminando",
				success: (res) => {
					console.log(res);
					setTimeout(() => {
						navigate("/landing-edit/empleados");
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

		if (op) navigate("/landing-edit/empleados");
	};

	return (
		<>
			<Nav
				leftIcon={<BiChevronLeft />}
				leftFuctionOnClick={onExit}
				title={create ? "Añadir Empleado" : "Editar Empleado"}
				// rightButtons={

				// }
			/>

			<div className="scrollInSpacework">
				<div className="container pt-2">
					{/* {!create ? <BookImageSlider book={book} /> : null} */}

					<FormFupaguaEmpleados
						create={create}
						// datos
						Data={Data}
						setData={setData}
						serviceList={serviceList}
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
