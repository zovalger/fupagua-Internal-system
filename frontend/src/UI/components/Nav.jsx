import styles from "./Nav.module.scss";

export default function Nav({ leftIcon, leftFuctionOnClick, title, rightButtons }) {
	return (
		<nav className={styles.container + ` bg-primary text-white`}>
		{/* <nav className=""> */}

			<button onClick={leftFuctionOnClick}>{leftIcon}</button>

			<img src="/FUPAGUA.LOGO.FONDOBLANCO.png" alt="logo" />

			<div className={styles.title}>{title}</div>

			<div className={styles.rightButtons}>{rightButtons}</div>
		</nav>
	);
}
