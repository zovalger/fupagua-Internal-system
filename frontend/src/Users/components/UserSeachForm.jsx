import {
	Form,
	Button,
	InputGroup,
	Label,
	Input,
	FormFeedback,
	FormGroup,
} from "reactstrap";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { AiOutlineClear, AiOutlineSearch } from "react-icons/ai";

import UserAccountContext from "../context/UserAccountContext";

const initialValues = {
	search: "",
	// dateBirth: new Date(Date.now()),
};

export function UserSeachForm({ makeQuery }) {
	const {
		setUserList_By_Query,
		queryObj,
		setQueryObj,
		setInQuery,
		settings,
		setSettings,
	} = useContext(UserAccountContext);

	const formik = useFormik({
		initialValues: queryObj || initialValues,

		validationSchema: Yup.object({
			search: Yup.string(),
		}),
	});

	const onSubmit = (e) => {
		e.preventDefault();
		const formData = formik.values;

		console.log(formData);

		const query = {};

		if (settings.byHistoryNumber) {
			query.historyNumber = formData.search;
		} else {
			query.name = formData.search;
			query.ci = formData.search;
		}
		setInQuery(true);
		setQueryObj(formik.values);
		makeQuery(query);
	};

	const resetForm = () => {
		formik.resetForm({ values: initialValues });
		setQueryObj(null);
		setInQuery(false);
		setUserList_By_Query([]);
	};

	return (
		<>
			<Form onSubmit={onSubmit} className="my-3">
				<FormGroup>
					<InputGroup>
						<Input
							placeholder="Buscar"
							aria-label="Buscar"
							name="search"
							value={formik.values.search}
							onChange={(e) => {
								const v = e.target.value;

								if (v.match(/\D/))
									setSettings({
										...settings,
										byHistoryNumber: false,
									});

								formik.handleChange(e);
							}}
							invalid={!!formik.errors.search}
							type="text"
							autoComplete="none"
						/>
						<Button type="button" onClick={() => resetForm()}>
							<AiOutlineClear />
						</Button>
						<Button color="primary" type="submit">
							<AiOutlineSearch />
						</Button>
					</InputGroup>
					<FormFeedback>{formik.errors.search}</FormFeedback>
				</FormGroup>
			</Form>
		</>
	);
}
