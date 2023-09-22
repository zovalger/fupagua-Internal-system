import { Input, Label, FormGroup, Button, InputGroup } from "reactstrap";
import { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineArrowUp, AiOutlineSave } from "react-icons/ai";
import { v4 as uuid } from "uuid";
import styles from "./ListItemTextAndTwoInputs.module.scss";
import { MdOutlineCancel } from "react-icons/md";
import { BsTrash } from "react-icons/bs";

export function ListItemTextAndTwoInputs({
	onHanddleChange,
	title,
	value: data = [],
	autoCompleteData,
}) {
	// const [autoComplete, setAutoComplete] = useState(autoCompleteData);
	const [items, setItems] = useState(data);

	useEffect(() => {
		setItems(data);
	}, [data.length]);

	const [familiarValues, setFamiliarValues] = useState({
		pariente: "",
		incidencia: "",
	});

	const [editing, setEditing] = useState(null);

	const onChange = ({ target: { name, value } }) =>
		setFamiliarValues({ ...familiarValues, [name]: value });

	const changeValueInList = (index, obj) => {
		const { pariente: par, incidencia: inc } = obj;

		const newValue = items.map((item, i) => {
			const { pariente, incidencia } = item;

			return i === index
				? {
						...item,
						pariente: { ...pariente, name: par },
						incidencia: { ...incidencia, name: inc },
				  }
				: item;
		});

		setItems(newValue);

		if (onHanddleChange) onHanddleChange(newValue);
	};

	const pushToList = () => {
		let { pariente, incidencia } = familiarValues;

		pariente = pariente.trim();
		incidencia = incidencia.trim();

		if (!pariente || !incidencia) return;

		const indexAutocompletePariente = autoCompleteData.parientes.findIndex(
			(a) => pariente === a.name
		);

		const indexAutocompleteIncidencia = autoCompleteData.incidencias.findIndex(
			(a) => incidencia === a.name
		);

		const toPushData = {
			pariente:
				indexAutocompletePariente >= 0
					? autoCompleteData.parientes[indexAutocompletePariente]
					: { name: pariente },

			incidencia:
				indexAutocompleteIncidencia >= 0
					? autoCompleteData.incidencias[indexAutocompleteIncidencia]
					: { name: incidencia },
		};

		// const toPushData =
		// 	indexAutocomplete >= 0
		// 		? autoCompleteData[indexAutocomplete]
		// 		: { name: value };

		const newValue = [...items, toPushData];
		setItems(newValue);
		setFamiliarValues({
			pariente: "",
			incidencia: "",
		});
		if (onHanddleChange) onHanddleChange(newValue);
	};

	const dropFromList = (index) => {
		const c = items.filter((item, i) => i !== index);

		setItems(c);
		onHanddleChange(c);
	};

	return (
		<>
			<FormGroup>
				<Label>{title}</Label>

				<div className={styles.item_container}>
					{items.map((data, index) => (
						<ItemList
							key={uuid()}
							data={data}
							index={index}
							dropFromList={dropFromList}
							changeValueInList={changeValueInList}
							editing={editing}
							setEditing={setEditing}
						/>
					))}
				</div>

				<InputGroup>
					<Input
						className="w-25"
						onChange={onChange}
						value={familiarValues.pariente}
						name="pariente"
						placeholder="Familiar"
						autoComplete="none"
						type="search"
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								//pushToList();
							}
						}}
						list={`${title}1`}
					/>
					<Input
						className="w-75"
						onChange={onChange}
						value={familiarValues.incidencia}
						name="incidencia"
						placeholder="Incidencia"
						autoComplete="none"
						type="search"
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								pushToList();
							}
						}}
						list={`${title}2`}
					/>
				</InputGroup>

				<Button
					type="button"
					className="w-100 mt-2"
					color="primary"
					onClick={pushToList}
				>
					<AiOutlineArrowUp />
				</Button>

				<datalist id={`${title}1`}>
					{autoCompleteData.parientes.map((v) => (
						<option value={v.name} key={v.id} />
					))}
				</datalist>

				<datalist id={`${title}2`}>
					{autoCompleteData.incidencias.map((v) => (
						<option value={v.name} key={v.id} />
					))}
				</datalist>
			</FormGroup>
		</>
	);
}

// ***********************************************************
// 									item en la lista
// ***********************************************************

const ItemList = ({
	index,
	data,
	dropFromList,
	changeValueInList,
	editing,
	setEditing,
}) => {
	const { pariente, incidencia } = data;

	// const [inputValue, setInputValue] = useState(name);

	const [familiarValues, setFamiliarValues] = useState({
		pariente: pariente.name,
		incidencia: incidencia.name,
	});

	const inputRef = useRef(null);

	const saveChanges = () => {
		changeValueInList(index, familiarValues);
		setEditing(null);
	};

	useEffect(() => {
		if (inputRef.current) inputRef.current.focus();

		if (editing !== index) {
			// setEditing(null);
			setFamiliarValues({
				pariente: pariente.name,
				incidencia: incidencia.name,
			});
		}
		// console.log(index);
	}, [editing === index]);
	return (
		<div className={styles.item}>
			{/* {editing === index ? (
				<>
					<input
						type="text"
						className={styles.name}
						value={familiarValues.pariente}
						ref={inputRef}
						onChange={({ target: { value } }) =>
							setFamiliarValues({ ...familiarValues, pariente: value })
						}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								// saveChanges();
							}
							if (e.key === "Escape") {
								setEditing(null);
								setFamiliarValues({
									pariente: pariente.name,
									incidencia: incidencia.name,
								});
							}
						}}
					/>

					<input
						type="text"
						className={styles.name}
						value={familiarValues.incidencia}
						ref={inputRef}
						onChange={({ target: { value } }) =>
							setFamiliarValues({ ...familiarValues, incidencia: value })
						}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								// saveChanges();
							}
							if (e.key === "Escape") {
								setEditing(null);
								setFamiliarValues({
									pariente: pariente.name,
									incidencia: incidencia.name,
								});
							}
						}}
					/>
					<button onClick={saveChanges} type="button">
						<AiOutlineSave color="0d6efd" />
					</button>
				</>
			) : ( */}
			<div
				className={`${styles.name} container-fluid`}
				// onClick={() => setEditing(index)}
			>
				<div className="row w-100">
					<div className="col-4">{pariente.name}</div>
					<div className="col-8">{incidencia.name}</div>
				</div>
			</div>
			{/* )} */}

			{editing === null || editing === index ? (
				<button
					onClick={() => {
						if (editing === index) {
							setEditing(null);
							setFamiliarValues({
								pariente: pariente.name,
								incidencia: incidencia.name,
							});
						} else {
							dropFromList(index);
						}
					}}
					type="button"
				>
					{editing === index ? <MdOutlineCancel /> : <BsTrash color="red" />}
				</button>
			) : null}
		</div>
	);
};
