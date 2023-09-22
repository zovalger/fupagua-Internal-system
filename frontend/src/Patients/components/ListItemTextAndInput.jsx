import { Input, Label, FormGroup, Button, InputGroup } from "reactstrap";
import { useEffect, useRef, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineArrowUp, AiOutlineSave } from "react-icons/ai";
import { v4 as uuid } from "uuid";
import styles from "./ListItemTextAndInput.module.scss";
import { MdOutlineCancel } from "react-icons/md";

export function ListItemTextAndInput({
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

	const [inputValue, setInputValue] = useState("");

	const [editing, setEditing] = useState(null);

	const onChange = ({ target: { value } }) => setInputValue(value);

	const changeValueInList = (index, value) => {
		const newValue = items.map((item, i) =>
			i === index ? { ...item, name: value } : item
		);
		setItems(newValue);
		if (onHanddleChange) onHanddleChange(newValue);
	};

	const pushToList = () => {
		const value = inputValue.trim();

		if (!value) return;

		const indexAutocomplete = autoCompleteData.findIndex(
			(a) => value === a.name
		);

		const toPushData =
			indexAutocomplete >= 0
				? autoCompleteData[indexAutocomplete]
				: { name: value };

		const newValue = [...items, toPushData];
		setItems(newValue);
		setInputValue("");
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
						onChange={onChange}
						value={inputValue}
						placeholder="Escribir aquí"
						autoComplete="none"
						type="search"
						onBlur={() => pushToList()}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								pushToList();
							}
						}}
						list={title}
					/>
					<Button type="button" color="primary" onClick={pushToList}>
						<AiOutlineArrowUp />
					</Button>
				</InputGroup>

				<datalist id={title}>
					{autoCompleteData.map((v) => {
						let isIn = false;

						items.map((it) => (v.id === it.id ? (isIn = true) : null));

						return !isIn ? <option value={v.name} key={v.id} /> : null;
					})}
				</datalist>
			</FormGroup>
		</>
	);
}

const ItemList = ({
	index,
	data,
	dropFromList,
	changeValueInList,
	editing,
	setEditing,
}) => {
	const { name } = data;

	const [inputValue, setInputValue] = useState(name);

	const inputRef = useRef(null);

	const saveChanges = () => {
		changeValueInList(index, inputValue);
		setEditing(null);
	};

	useEffect(() => {
		if (inputRef.current) inputRef.current.focus();

		if (editing !== index) {
			// setEditing(null);
			setInputValue(name);
		}
		// console.log(index);
	}, [editing === index]);
	return (
		<div className={styles.item}>
			{editing === index ? (
				<>
					<input
						type="text"
						className={styles.name}
						value={inputValue}
						ref={inputRef}
						onChange={({ target: { value } }) => setInputValue(value)}
						// onBlur={() => {
						// 	saveChanges();
						// }}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();

								const modificar = data.id
									? window.confirm(
											"si realiza esta accion, tambien modificara registros de otros pacientes"
									  )
									: true;

								if (modificar) saveChanges();
								else {
									setEditing(null);
									setInputValue(name);
								}
							}
							if (e.key === "Escape") {
								setEditing(null);
								setInputValue(name);
							}
						}}
					/>
					<button onClick={saveChanges} type="button">
						<AiOutlineSave color="0d6efd" />
					</button>
				</>
			) : (
				<div className={styles.name} onClick={() => setEditing(index)}>
					<div> {name}</div>
				</div>
			)}

			{editing === null || editing === index ? (
				<button
					onClick={() => {
						if (editing === index) {
							setEditing(null);
							setInputValue(name);
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
