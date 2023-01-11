export function toInputDate(date) {
	return date
		.toLocaleDateString()
		.split("/")
		.reverse()
		.map((value) => (value.length < 2 ? `0${value}` : value))
		.join("-");
}
