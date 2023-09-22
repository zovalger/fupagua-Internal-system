function getBirthdateFromAge(age) {
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

module.exports = getBirthdateFromAge;
