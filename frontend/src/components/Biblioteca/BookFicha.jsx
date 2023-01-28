import styles from "./BookFicha.module.scss";

export default function BookFicha({ data }) {
	const {
		cota,
		title,
		subtitle,
		autor,
		editionDate,
		city,
		numberPages,
		height,
		editors,
		observations,
		collection,
		materia,
	} = data.book;
	const { typeFicha } = data;

	const AutorFicha = () => (
		<>
			<div className={styles.cota}>{cota}</div>
			<div>
				<span>{autor}</span>
			</div>
			<div>
				&nbsp;&nbsp; {title}
				{subtitle ? `: ${subtitle}` : ""} / <span>{autor}</span> - ed. - {city}:{" "}
				{editors}, {editionDate}
			</div>
			<div>
				&nbsp;&nbsp; {numberPages} p.: il. ; {height} cm. {observations}
				{collection ? ` - ${collection}` : ""}
			</div>
			<div>Materias: {materia}</div>
		</>
	);

	const TitleFicha = () => (
		<>
			<div className={styles.cota}>{cota}</div>
			{/* <div>
				<span>{autor}</span>
			</div> */}
			<div>
				{title}
				{subtitle ? `: ${subtitle}` : ""} / <span>{autor}</span> - ed. - {city}:{" "}
				{editors}, {editionDate}
			</div>
			<div>
				&nbsp;&nbsp; {numberPages} p.: il. ; {height} cm. {observations}
				{collection ? ` - ${collection}` : ""}
			</div>
			<div>Materias: {materia}</div>
		</>
	);

	const MateriaFicha = () => (
		<>
			<div className={styles.cota}>{cota}</div>
			<div>Materias: {materia}</div>
			{/* <div>
				<span>{autor}</span>
			</div> */}
			<div>
				{title}
				{subtitle ? `: ${subtitle}` : ""} / <span>{autor}</span> - ed. - {city}:{" "}
				{editors}, {editionDate}
			</div>
			<div>
				&nbsp;&nbsp; {numberPages} p.: il. ; {height} cm. {observations}
				{collection ? ` - ${collection}` : ""}
			</div>
		</>
	);

	// const

	return (
		<>
			<div className={styles.container}>
				{typeFicha === "autor" ? (
					<AutorFicha />
				) : typeFicha === "materia" ? (
					<MateriaFicha />
				) : (
					<TitleFicha />
				)}
			</div>
		</>
	);
}
