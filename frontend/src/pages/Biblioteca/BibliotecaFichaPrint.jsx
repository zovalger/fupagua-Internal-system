import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { AiOutlinePrinter } from "react-icons/ai";
import toast from "react-hot-toast";

import styles from "../styles/BibliotecaFichaPrint.module.scss";
import Nav from "../../components/common/Nav";
import BookFicha from "../../components/Biblioteca/BookFicha";
import {
	getBookFichasRequest,
	updateBookFichaRequest,
} from "../../api/booksFichas";

export function BibliotecaFichaPrint({ create }) {
	const [bookFichaData, setBookFichaData] = useState([]);

	const getData = async () => {
		const myPromise = getBookFichasRequest();

		toast.promise(myPromise, {
			loading: "cargando",
			success: (res) => {
				const fichas = res.data;
				console.log(res.data);

				setBookFichaData(fichas);
				return fichas.length <= 0
					? "no hay fichas por imprimir"
					: "informacion de fichas obtenida";
			},
			error: (error) => {
				console.log(error);
				return "no se pudieron obtener las fichas";
			},
		});
	};

	const btnPrint = async () => {
		window.print();

		if (window.confirm("se imprimieron las fichas correctamente?")) {
			await bookFichaData.map(
				async (ficha) =>
					await updateBookFichaRequest(ficha.id, { printed: true })
			);

			getData();
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Nav
				leftIcon={
					<Link to="/biblioteca">
						<BiChevronLeft />
					</Link>
				}
				// leftFuctionOnClick={toggleAsideActive}
				title={create ? "Añadir libro" : "Editar libro"}
				rightButtons={
					<>
						<button onClick={btnPrint}>
							<AiOutlinePrinter />
						</button>
					</>
				}
			/>

			<div className={styles.container}>
				{bookFichaData.map((bookFicha) => (
					<BookFicha key={bookFicha.id} data={bookFicha} />
				))}
			</div>
		</>
	);
}
