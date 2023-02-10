import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BiTrash } from "react-icons/bi";

const FormBook = ({
	bookData,
	fichaData,
	create,
	onSubmit,
	onInputChange,
	setBookData,
	onInputFichaChange,
	deleteBook,
}) => {
	return (
		<Form onSubmit={onSubmit}>
			<Form.Group className="my-3" controlId="formBasicEmail">
				<Form.Label>Tipo</Form.Label>

				<Form.Select onChange={onInputChange} name="type" value={bookData.type}>
					<option value="book">Libro</option>
					<option value="magazine">Revista</option>
					<option value="audiobook">Audiolibro</option>
					<option value="fonoteca">Fonoteca</option>
					<option value="video">Video</option>
				</Form.Select>
			</Form.Group>

			{/* *****************************************************************
											inicio del formulario
			***************************************************************** */}

			<Form.Group className="mb-3" controlId="title">
				<Form.Label>Titulo</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="title"
					value={bookData.title}
					required
					autoComplete="none"
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="subtitle">
				<Form.Label>Subtitulo</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="subtitle"
					value={bookData.subtitle}
					autoComplete="none"
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="autor">
				<Form.Label>Autor</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="autor"
					list="autors"
					value={bookData.autor}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="cota">
				<Form.Label>
					{bookData.type !== "book" && bookData.type !== "audiobook"
						? "Numero"
						: "Cota"}
				</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="cota"
					value={bookData.cota}
					autoComplete="none"
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="editionDate">
				<Form.Label>
					{bookData.type !== "book" || bookData.type !== "audiobook"
						? "Año"
						: "Fecha de edicion"}
				</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="number"
					name="editionDate"
					value={bookData.editionDate}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="materia">
				<Form.Label>Materia</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="materia"
					list="materia"
					value={bookData.materia}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="city">
				<Form.Label>Ciudad</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="city"
					value={bookData.city}
					autoComplete="none"
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="editors">
				<Form.Label>Editores</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="editors"
					value={bookData.editors}
					autoComplete="none"
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="height">
				<Form.Label>Altura</Form.Label>
			

<InputGroup className="mb-3">
<Form.Control
					onChange={onInputChange}
					type="number"
					name="height"
					value={bookData.height}
					autoComplete="none"
				/>
        <InputGroup.Text>Cm</InputGroup.Text>
      </InputGroup>

			</Form.Group>

			<Form.Group className="mb-3" controlId="numberPages">
				<Form.Label> Numero de paginas</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="number"
					name="numberPages"
					value={bookData.numberPages}
					autoComplete="none"
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="numberCopies">
				<Form.Label> Numero de ejemplares</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="number"
					name="numberCopies"
					value={bookData.numberCopies}
					autoComplete="none"
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="typeAdquisition">
				<Form.Label>Tipo adquisición</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="typeAdquisition"
					value={bookData.typeAdquisition}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="collection">
				<Form.Label>Coleccion</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="collection"
					list="collection"
					value={bookData.collection}
					autoComplete="none"
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="observations">
				<Form.Label>Observaciones</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="observations"
					value={bookData.observations}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="description">
				<Form.Label>Descripcion</Form.Label>
				<Form.Control
					onChange={onInputChange}
					name="description"
					// cols="30"
					rows="10"
					value={bookData.description}
					autoComplete="none"
					maxLength={500}
					as="textarea"
				/>
			</Form.Group>

			{/* *****************************************************************
							input de imagenes de portadas y imagenes extras
			***************************************************************** */}

			<Form.Group controlId="formFile" className="my-3">
				<Form.Label>Imagen de portada</Form.Label>
				<Form.Control
					type="file"
					onChange={(e) =>
						setBookData({ ...bookData, portada: e.target.files[0] })
					}
					name="portada"
					accept="image/*"
				/>
			</Form.Group>

			<Form.Group controlId="formFile" className="my-3">
				<Form.Label>Imagenes Extra</Form.Label>
				<Form.Control
					type="file"
					onChange={(e) =>
						setBookData({ ...bookData, imgExtras: e.target.files[0] })
					}
					name="imgExtras"
					accept="image/*"
					multiple
				/>
			</Form.Group>

			{/* *****************************************************************
							fichas impresas de los libros 
			***************************************************************** */}

			{(bookData.type === "audiobook" || bookData.type === "book") &&
			fichaData.length > 0 ? (
				<Form.Group className="mb-3" controlId="fichasBooks">
					<Form.Label>Fichas Impresas</Form.Label>

					{fichaData.map((ficha) => (
						<Form.Check
							key={ficha.id}
							onChange={onInputFichaChange}
							name={ficha.id}
							checked={ficha.printed}
							label={ficha.title}
						/>
					))}
				</Form.Group>
			) : (
				""
			)}

			{/* *****************************************************************
							botones para enviar o eliminar el formulario
			***************************************************************** */}

			<Button variant="primary" type="submit" className="w-100">
				Guardar
			</Button>

			{!create ? (
				<Button
					variant="danger"
					type="button"
					onClick={deleteBook}
					className="w-100 mt-3"
				>
					<BiTrash />
				</Button>
			) : null}

			{/* *****************************************************************
							datos de ayuda para para los inputs
			***************************************************************** */}

			<datalist id="autors">
				<option value="gabriel garcia marques" />
				<option value="antonio lobera" />
				<option value="chespirito" />
			</datalist>

			<datalist id="materia">
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

			<datalist id="collection">
				{/* <option value="enciclopedia" />
						<option value="historia universal" />
						<option value="agatha christie" /> */}
			</datalist>
		</Form>
	);
};

export default FormBook;
