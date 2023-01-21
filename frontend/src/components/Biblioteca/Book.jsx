import styles from "./Book.module.scss";

export default function Book({ title, subtitle, autor, description, imgURL }) {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<img src={imgURL ? imgURL : "/bookExample.jpg"} alt="" />
			</div>
			<div className={styles.text}>
				<div className={styles.title}>{title}</div>
				<div className={styles.subtitle}> {subtitle}</div>
				<div className={styles.autor}>Autor: {autor}</div>
				<div className={styles.description}>{description}</div>
			</div>
		</div>
	);
}
