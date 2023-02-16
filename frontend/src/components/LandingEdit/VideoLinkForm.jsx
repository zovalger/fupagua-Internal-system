import Button from "react-bootstrap/esm/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import styles from "./VideoLinkForm.module.scss";
import { useState } from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

export function VideoLinkForm({ data }) {
	const [curretTextCategory, setCurretTextCategory] = useState("");
	const [categoriesArr, setCategoriesArr] = useState(["general"]);
	const [videoData, setVideoData] = useState({
		title: "",
		description: "",
		url: "",
	});

	const onChange = ({ target: { name, value } }) =>
		setVideoData({ ...videoData, [name]: value });

	const addCategory = () => {
		setCurretTextCategory("");
		for (const c of categoriesArr) {
			if (c === curretTextCategory) return;
		}
		let arr = categoriesArr;
		arr.push(curretTextCategory);
		setCategoriesArr(arr);
	};

	const deleteCategory = (index) => {

		

	};

	// todo enviar formulario
	const onSubmit = () => {};

	const CategoryItem = ({ children, index }) => (
		<div>
			{children} <AiOutlineClose onClick={deleteCategory(index)} />
		</div>
	);

	return (
		<div className={styles.container}>
			<div className="row">
				<div className="  ">
					<div className={styles.video}>
						<iframe
							src="https://www.youtube.com/embed/dWFBlfZSkak"
							title="YouTube video player"
						></iframe>
					</div>
				</div>
				<div className="">
					<Form onSubmit={onSubmit}>
						<Form.Group className="mb-1">
							<Form.Control
								onChange={onChange}
								type="text"
								name="title"
								placeholder="titulo"
								value={videoData.title}
								autoComplete="none"
								required
							/>
						</Form.Group>
						<Form.Group className="mb-1">
							<Form.Control
								onChange={onChange}
								type="text"
								name="url"
								placeholder="link de youtube"
								value={videoData.url}
								autoComplete="none"
								required
							/>
						</Form.Group>
						<Form.Group className="mb-1">
							<Form.Control
								onChange={onChange}
								name="description"
								// cols="30"
								rows="3"
								value={videoData.description}
								autoComplete="none"
								maxLength={255}
								as="textarea"
							/>
						</Form.Group>

						{/* ******************************************************************* */}
						{/* **********				listado de categorias del video			************* */}
						{/* ******************************************************************* */}

						<div>
							{categoriesArr.map((c) => (
								<CategoryItem>{c}</CategoryItem>
							))}
						</div>

						<InputGroup controlId="searchinput">
							<Form.Control
								placeholder="Buscar"
								aria-label="Buscar"
								type="search"
								onChange={(e) => setCurretTextCategory(e.target.value)}
								value={curretTextCategory}
								list="categories"
								// aria-describedby="basic-addon2"
							/>

							<Button type="button" onClick={addCategory}>
								<AiOutlinePlus />
							</Button>
						</InputGroup>

						{/* // todo: buscar las categorias existentes en la base de datos  */}
						{/* // todo: mudar esta lista al padre de todos estos formularios  */}
						<datalist id="categories">
							<option value="Obras generales" />
							<option value="Filosofía y psicología" />
							<option value="Religión" />
							<option value="Ciencias sociales" />
							<option value="Lenguaje" />
							<option value="Ciencias naturales" />
							<option value="Tecnología y ciencias de la salud" />
							<option value="Arte y deportes " />
							<option value="Literatura" />
							<option value="Geografía e historia" />
						</datalist>
					</Form>
				</div>
			</div>
		</div>
	);
}
