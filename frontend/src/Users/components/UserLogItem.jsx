import moment from "moment";
import style from "./UserLogItem.module.scss";

import React, { useState } from "react";
import { Row, Col, Collapse, Button, CardBody, Card } from "reactstrap";

const UserLogItem = ({ data }) => {
	const { createdAt, action, type, userId, user, datos } = data;

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<div
			className={`${style.container} ${datos ? style.interactive : null}`}
			onClick={toggle}
		>
			<Row>
				<Col sm={12} md={12} lg={3}>
					{`> ${moment(createdAt).format("DD/MM/YYYY - hh:mm a")} ${type}`}
				</Col>

				<Col>
					Usuario:{" "}
					{user ? (
						<>
							<span>{`ID ${user.id} `}</span>
							<span>{`${user.email} `}</span>
							<span>({user.name})</span>
						</>
					) : userId >= 1 ? (
						userId
					) : (
						"Root"
					)}
				</Col>

				<Col sm={12} md={12} lg={3}>
					Accion: {action}
				</Col>
			</Row>
			<Row>
				{datos && (
					<Collapse isOpen={isOpen}>
						<Card>
							<CardBody>{mostrarObjetoEnBootstrap(JSON.parse(datos))}</CardBody>
						</Card>
					</Collapse>
				)}
			</Row>
		</div>
	);
};
function mostrarObjetoEnBootstrap(objeto) {
	let html = [];
	for (let propiedad in objeto) {
		if (objeto.hasOwnProperty(propiedad)) {
			html.push(
				<Row key={propiedad}>
					<Col xs={5} sm={3}>
						{propiedad}:
					</Col>
					<Col xs={7} sm={9}>
						{typeof objeto[propiedad] === "object"
							? JSON.stringify(objeto[propiedad])
							: objeto[propiedad]}
					</Col>
				</Row>
			);
		}
	}
	return html;
}
export default UserLogItem;
