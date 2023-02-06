import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import toast from "react-hot-toast";

import styles from "../styles/Biblioteca.module.scss";
import { useAppData } from "../../context/AppContext";

import Nav from "../../components/common/Nav";
import { PatientSeachForm } from "../../components/Patients/PatientSeachForm";
import { PatientListItem } from "../../components/Patients/PatientListItem";

export function Patients() {
	const { toggleAsideActive } = useAppData();

	const llenarLista = (book) => (
		<Link to={`./${book.id}`} key={book.id}>
			{/* <Book dataBook={book} /> */}
		</Link>
	);

	let p = [];

	for (let index = 0; index < 10; index++) {
		p.push(<PatientListItem />);
	}

	return (
		<>
			<Nav
				leftIcon={<RxHamburgerMenu />}
				leftFuctionOnClick={toggleAsideActive}
				title={<div>Pacientes</div>}
				rightButtons={
					<>
						{/* <button onClick={refreshData}>
							<AiOutlineReload />
						</button> */}

						<Link to={"/pacientes/añadir"}>
							<button>
								<AiOutlinePlus />
							</button>
						</Link>
					</>
				}
			/>

			{/*********************************************************************
			
												formulario para buscar libros 
				
			*********************************************************************/}

			<div className="container scrollInSpacework">
				<PatientSeachForm />

				{p}
			</div>
		</>
	);
}
