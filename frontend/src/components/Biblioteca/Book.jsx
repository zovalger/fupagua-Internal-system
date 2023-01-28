import styles from "./Book.module.scss";

export default function Book({ dataBook }) {
	const {
		title,
		subtitle,
		autor,
		description,
		cota,
		img_cloudinary_url,
		img_local_url,
	} = dataBook;

	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<img
					src={img_local_url ? img_local_url : img_cloudinary_url}
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
				<div className={styles.description}>{description}</div>
			</div>
		</div>
	);
}
