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
