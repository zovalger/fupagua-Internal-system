import styles from "./Nav.module.scss";

export default function Nav({ leftIcon, title, rightButtons }) {
	return (
		<nav className={styles.container}>
			<button>{leftIcon}</button>
			<div className={styles.title}>{title}</div>

			<div className={styles.rightButtons}>
				{rightButtons
					? rightButtons.map((value, index) => (
							<button key={index}>{value}</button>
					  ))
					: ""}
			</div>
		</nav>
	);
}
