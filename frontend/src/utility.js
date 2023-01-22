export function toInputDate(date) {
	return date
		.toLocaleDateString()
		.split("/")
		.reverse()
		.map((value) => (value.length < 2 ? `0${value}` : value))
		.join("-");
}

// export function onInputChange({ target: { name, value } }, setF, obj) {
// 	// if (value.length <= 0) setInQuery(false);

// 	console.log(name, value);
// 	setF({
// 		...obj,
// 		[name]: value,
// 	});
// }
