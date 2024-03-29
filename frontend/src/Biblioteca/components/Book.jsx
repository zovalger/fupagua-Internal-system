import styles from "./Book.module.scss";

export default function Book({ dataBook, onClick }) {
	const { title, subtitle, autor, description, cota, portada } = dataBook;

	return (
		<div className={styles.container} onClick={onClick}>
			<div className={styles.imgContainer}>
				<img
					src={
						// portada
						// 	? portada.img_cloudinary_url
						// 		? portada.img_cloudinary_url
						// 		: portada.img_local_url
						// 		? portada.img_local_url
						// 		: portada.img_local_url_original
						// 	: "/"

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
				<div className={styles.description}>{description}</div>
			</div>
		</div>
	);
}
