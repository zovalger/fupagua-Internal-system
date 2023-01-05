import styles from "./DateButton.module.scss";

export default function DateButton({ children,selected }) {
	return (
		<div className={`${styles.container} ${selected ? styles.selected : ""}`}>
			<span>{children}</span>
		</div>
	);
}
