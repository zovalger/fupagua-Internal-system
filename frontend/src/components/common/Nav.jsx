import styles from "./Nav.module.scss";

export default function Nav({ leftIcon, leftFuctionOnClick, title, rightButtons }) {
	return (
		<nav className={styles.container}>

			<button onClick={leftFuctionOnClick}>{leftIcon}</button>
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
