import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import toast from "react-hot-toast";

// import styles from "../styles/BibliotecaFormBook.module.scss";
import Nav from "../../components/common/Nav";
import { MdOutlineEdit } from "react-icons/md";

export function PatientsDetails({ create }) {
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		const getData = async () => {
			// const res = await getBookRequest(params.id);
			// setBookData(res.data);
			// setFichaData(res.data.bookfichas);
		};

		getData();
	}, []);

	return (
		<>
			<Nav
				leftIcon={
					<button
						onClick={() => {
							navigate("/pacientes");
						}}
					>
						<BiChevronLeft />
					</button>
				}
				// leftFuctionOnClick={toggleAsideActive}
				title={`0000000`}
				rightButtons={
					<Link to={`/pacientes/editar/${params.id}`}>
						<button>
							<MdOutlineEdit />
						</button>
					</Link>
				}
			/>

			<div className="container scrollInSpacework">dasdsa</div>
		</>
	);
}
