import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineReload } from "react-icons/ai";
import toast from "react-hot-toast";

import Nav from "../../../components/common/Nav";

import { BiChevronLeft } from "react-icons/bi";
import { FupaguaServiceItem } from "../../../components/LandingEdit/FupaguaServicios/FupaguaServiceItem";
import { getFupaguaServicesRequest } from "../../../api/fupaguaService";
import { FupaguaEmpleadosItem } from "../../../components/LandingEdit/FupaguaEmpleados/FupaguaEmpleadosItem";
import { getFupaguaEmpleadosRequest } from "../../../api/fupaguaEmpleado";

export function FupaguaEmpleadosList() {
	const navigate = useNavigate();

	const [empleados, setEmpleados] = useState([]);

	// const [patientsQuery, setPatientsQuery] = useState([]);
	// const [inQuery, setInQuery] = useState(false);

	const findData = async (query) => {
		try {
			const myPromise = getFupaguaEmpleadosRequest(query);

			toast.promise(
				myPromise,
				{
					// id: "refreshDataPatients",
					loading: "cargando datos",
					success: (res) => {
						console.log(res);

						setEmpleados(res.data);

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
				title={"FUPAGUA Empleados"}
				rightButtons={
					<>
						<button onClick={() => findData()}>
							<AiOutlineReload />
						</button>

						<Link to={"/landing-edit/empleados/añadir"}>
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

					{empleados.map((i) => (
						<FupaguaEmpleadosItem data={i} key={i.id} />
					))}

					{/* {inQuery && patientsQuery.length > 0
						? patientsQuery.map(insertarItemInList)
						: videoLinks.map(insertarItemInList)} */}
				</div>
			</div>
		</>
	);
}
