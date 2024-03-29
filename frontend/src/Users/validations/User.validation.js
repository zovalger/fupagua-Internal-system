import * as Yup from "yup";
import { toUpperCamelCase } from "../../utility/strUpperCamelCase";

export const userValidatorSchema = Yup.object({
	name: Yup.string("El nombre debe ser un Texto")
		.trim()
		.required("El nombre es obligatorio")
		.min(3, "El nombre debe ser mayor de 3 letras")
		.transform((value, originalValue) => toUpperCamelCase(originalValue)),

	// lastname: Yup.string(),
	CI: Yup.string()
		.required("La cedula es obligatoria")
		.transform((value, originalValue) => {
			if (!originalValue) return "";

			return originalValue.toString().replace(/\D/g, "");
		}),
	birthdate: Yup.date(),
	address: Yup.string().required("La direccion es obligatoria").trim(),
	phone: Yup.string().required("El numero de telefono es obligatorio"),

	email: Yup.string()
		.required("El correo electronico es obligatorio")
		.email("No es un formato de correo valido"),
	// permissions: Yup.string().oneOf(
	// 	["Indefinido", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
	// 	"El tipo de sangre no esta dentro de los reconosidos"
	// ),
});
