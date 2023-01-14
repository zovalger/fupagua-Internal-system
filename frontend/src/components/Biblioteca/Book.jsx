import styles from "./Book.module.scss";

export default function Book({ title, description, imgURL }) {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<img src={imgURL ? imgURL : "/bookExample.jpg"} alt="" />
			</div>
			<div className={styles.text}>
				<div className={styles.title}>{title}</div>
				<div className={styles.description}>{description}</div>
			</div>
		</div>
	);
}
