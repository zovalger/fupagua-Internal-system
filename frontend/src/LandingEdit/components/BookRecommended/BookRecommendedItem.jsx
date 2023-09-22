import styles from "./BookRecommendedItem.module.scss";
import { useNavigate } from "react-router-dom";
import formateToEmbeLinkYotube from "../../../utility/formateToEmbeLinkYotube";
import UserContext from "../../../context/UserContext";
import { useContext } from "react";

export function BookRecommendedItem({ data }) {
	const { user } = useContext(UserContext);

	const navigate = useNavigate();

	const { id, book, bookrecommendedcategory } = data;
	const { title, subtitle, autor, description, cota, portada } = book;
	const { title: titleCategory } = bookrecommendedcategory;

	const toEdit = () => {
		if (user && user.permissions.includes("landingEdit"))
			navigate(`/landing-edit/libros_recomendados/${id}`);
	};

	// return <div className={styles.container}></div>;

	return (
		<div className={styles.container} onClick={toEdit}>
			<div className={styles.imgContainer}>
				<img
					src={
						portada
							? portada.img_local_url
								? `/${portada.img_local_url}`
								: `/${portada.img_local_url_original}`
							: ""
					}
					alt="foto de portada"
				/>
			</div>
			<div className={styles.text}>
				<div className={styles.title}>{title}</div>
				<div className={styles.subtitle}> {subtitle}</div>
				<div className={styles.autor}>
					<b>Autor: </b> {autor}
				</div>
				<div className={styles.autor}>
					<b>cota: </b>
					{cota}
				</div>
				<div className={styles.category}>{titleCategory}</div>
			</div>
		</div>
	);
}
