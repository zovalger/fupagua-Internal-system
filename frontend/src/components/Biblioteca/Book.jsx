import styles from "./Book.module.scss";

export default function Book({
	title,
	subtitle,
	autor,
	description,
	cota,
	img_cloudinary_url,
}) {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<img
					src={img_cloudinary_url ? img_cloudinary_url : ""}
					alt=""
				/>
			</div>
			<div className={styles.text}>
				<div className={styles.title}>{title}</div>
				<div className={styles.subtitle}> {subtitle}</div>
				<div className={styles.autor}>Autor: {autor}</div>
				<div className={styles.description}>{description}</div>
				<div className={styles.autor}>cota: {cota}</div>
			</div>
		</div>
	);
}
