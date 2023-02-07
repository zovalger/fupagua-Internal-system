import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { BiTrash } from "react-icons/bi";

export function FormPatient({
	create,
	onSubmit,
	onInputChange,
	data,
	deleteItem,
}) {
	return (
		<Form className="mt-3" onSubmit={onSubmit}>
			<h3>Paciente</h3>
			{/* *****************************************************************
											inicio del formulario
			***************************************************************** */}
			{/* *********************   Nombre completo   ************************/}
			<Form.Group className="mb-3" controlId="name">
				<Form.Label>Nombre completo</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="name"
					// value={data.title}
					required
					autoComplete="none"
				/>
			</Form.Group>
			{/* *********************       Cedula        ************************/}
			<Form.Group className="mb-3" controlId="ci">
				<Form.Label>Cedula</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="ci"
					// value={data.title}

					autoComplete="none"
				/>
			</Form.Group>
		

			{/* *********************  Fecha de nacimiento  ************************/}

			<Form.Group className="mb-3" controlId="dateBirth">
				<Form.Label>Fecha de nacimiento</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="date"
					name="dateBirth"
					// value={data.title}

					autoComplete="none"
				/>
			</Form.Group>

			{/* *********************  Edad  ************************/}
			<Form.Group className="mb-3" controlId="age">
				<Form.Label>Edad</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="number"
					name="age"
					// value={data.title}

					autoComplete="none"
				/>
			</Form.Group>

			{/* *********************  Sexo  ************************/}

			<Form.Group className="mb-3" controlId="sex">
				<Form.Label>Sexo</Form.Label>

				<Form.Select
					onChange={onInputChange}
					name="sex"
					// value={data.title}
				>
					<option value="male">H</option>
					<option value="female">F</option>
				</Form.Select>
			</Form.Group>

			{/* *********************  Peso  ************************/}

			<Form.Group className="mb-3" controlId="weight">
				<Form.Label>Peso</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="number"
					name="weight"
					// value={data.title}

					autoComplete="none"
				/>
			</Form.Group>

			{/* *********************  Escolaridad  ************************/}

			<Form.Group className="mb-3" controlId="scholarship">
				<Form.Label>Escolaridad</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="scholarship"
					// value={data.title}

					autoComplete="none"
				/>
			</Form.Group>

				{/* *********************   Numero de historia   ************************/}
				<Form.Group className="mb-3" controlId="historyNumber">
				<Form.Label>Numero de historia</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="historyNumber"
					// value={data.title}

					autoComplete="none"
				/>
			</Form.Group>

			<h3>Representante</h3>

			{/* *********************   Nombre completo   ************************/}

			<Form.Group className="mb-3" controlId="name-r">
				<Form.Label>Nombre completo</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="name"
					// value={data.title}

					autoComplete="none"
				/>
			</Form.Group>

			{/* *********************       Cedula        ************************/}

			<Form.Group className="mb-3" controlId="ci-r">
				<Form.Label>Cedula</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="ci"
					// value={data.title}

					autoComplete="none"
				/>
			</Form.Group>

			{/* *********************  edad ************************/}

			<Form.Group className="mb-3" controlId="age-r">
				<Form.Label>edad</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="number"
					name="age"
					// value={data.title}

					autoComplete="none"
				/>
			</Form.Group>

			{/* *********************  numero de telefono ************************/}

			<Form.Group className="mb-3" controlId="phoneNumber">
				<Form.Label>Numero de telefono</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="phoneNumber"
					// value={data.title}

					autoComplete="none"
				/>
			</Form.Group>

			{/* *********************  email ************************/}

			<Form.Group className="mb-3" controlId="email">
				<Form.Label>Correo electronico</Form.Label>
				<Form.Control
					onChange={onInputChange}
					type="text"
					name="email"
					// value={data.title}

					autoComplete="none"
				/>
			</Form.Group>

			<Button variant="primary" type="submit" className="w-100">
				Guardar
			</Button>

			{!create ? (
				<Button
					variant="danger"
					type="button"
					onClick={deleteItem}
					className="w-100 mt-3"
				>
					<BiTrash />
				</Button>
			) : null}
		</Form>
	);
}
