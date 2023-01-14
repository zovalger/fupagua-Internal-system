import styles from "./styles/BibliotecaAddBook.module.scss";

import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/common/Nav";
import { BiChevronLeft, BiTrash } from "react-icons/bi";

import { useAppData } from "../context/AppContext";
import { useState } from "react";

export function BibliotecaBook({ create }) {
	return (
		<>
			<Nav
				leftIcon={
					<Link to="/biblioteca">
						<BiChevronLeft />
					</Link>
				}
				// leftFuctionOnClick={toggleAsideActive}
				title={"anadir libro"}
				// rightButtons={
				// 	<button>
				// 		<AiOutlinePlus />
				// 	</button>
				// }
			/>

			<div className={styles.container}>
				<h3>titulo</h3>
				<div>
					<strong>descripcion:</strong> Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Accusamus dolore quis unde adipisci voluptatum,
					necessitatibus neque ut perferendis odio. Adipisci quaerat eveniet id
					natus, ut veniam quidem illo aliquam obcaecati.
				</div>
				<div>
					<strong>autor:</strong> Lorem, ipsum dolor.
				</div>
				<div>
					<strong>fecha de edicion:</strong> Lorem, ipsum.
				</div>
				<div>
					<strong>materia:</strong> Lorem.
				</div>
				<div>
					<strong>numero de ejemplares:</strong> 2
				</div>
				<div>
					<strong>cota:</strong> g153
				</div>
				<div>
					<strong>dimensiones:</strong> 15 cm X 30 cm
				</div>
				<div>
					<strong>Numero de paginas:</strong> 300
				</div>
				<div>
					<strong>datos adicinales:</strong> Lorem ipsum dolor sit amet.
				</div>
			</div>
		</>
	);
}
