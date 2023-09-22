export function toInputDate(date) {
	let d = date;
	if (!d) return;

	if (typeof d === "string") d = new Date(d);

	return d
		.toLocaleDateString()
		.split("/")
		.reverse()
		.map((value) => (value.length < 2 ? `0${value}` : value))
		.join("-");
}

export function toDateInput(date) {
	let a = date
		.split("-")
		.reverse()
		.map((value) => (value.length < 2 ? `0${value}` : value))
		.join("/");

	console.log(a);
	return a;
}

//calcular la edad de una persona
//recibe la fecha como un string en formato español
//devuelve un entero con la edad. Devuelve false en caso de que la fecha sea incorrecta o mayor que el dia actual
export function calcular_edad(fecha) {
	//calculo la fecha de hoy
	let hoy = new Date();
	//alert(hoy)

	console.log(fecha);

	fecha = fecha.toLocaleDateString();

	//calculo la fecha que recibo
	//La descompongo en un array
	let array_fecha = fecha.split("/");
	//si el array no tiene tres partes, la fecha es incorrecta
	if (array_fecha.length !== 3) return false;

	//compruebo que los ano, mes, dia son correctos
	let ano;
	ano = parseInt(array_fecha[2]);
	if (isNaN(ano)) return false;

	let mes;
	mes = parseInt(array_fecha[1]);
	if (isNaN(mes)) return false;

	let dia;
	dia = parseInt(array_fecha[0]);
	if (isNaN(dia)) return false;

	//si el año de la fecha que recibo solo tiene 2 cifras hay que cambiarlo a 4
	if (ano <= 99) ano += 1900;

	//resto los años de las dos fechas
	let edad = hoy.getFullYear() - ano - 1; //-1 porque no se si ha cumplido años ya este año

	// console.log(hoy.getFullYear());
	//si resto los meses y me da menor que 0 entonces no ha cumplido años. Si da mayor si ha cumplido
	if (hoy.getMonth() + 1 - mes < 0)
		//+ 1 porque los meses empiezan en 0
		return edad;
	if (hoy.getMonth() + 1 - mes > 0) return edad + 1;

	//entonces es que eran iguales. miro los dias
	//si resto los dias y me da menor que 0 entonces no ha cumplido años. Si da mayor o igual si ha cumplido
	if (hoy.getUTCDate() - dia >= 0) return edad + 1;

	return edad;
}

export function calculateAge(birthday) {
	var ageDifMs = Date.now() - birthday.getTime();
	var ageDate = new Date(ageDifMs);

	var years = ageDate.getUTCFullYear() - 1970;
	var months = ageDate.getUTCMonth();
	var days = ageDate.getUTCDate() - 1;

	if (months < 0 || (months === 0 && days < 0)) {
		years--;
	}

	return years;
}

export function getBirthdateFromAge(age) {
	const today = new Date();
	const birthdate = new Date(
		today.getFullYear() - age,
		today.getMonth(),
		today.getDate()
	);
	if (birthdate > today) {
		birthdate.setFullYear(birthdate.getFullYear() - 1);
	}
	return birthdate;
}

// var birthday = new Date("2000-06-15");
// var age = calculateAge(birthday);
// console.log("La edad es: " + age + " años");
