let tabExport = []

const reverseDate = (date) => {
	const split = date.split("-");
	for (let i = 0; i < split.length; i++) {
		tabExport.push(split[i]);
	}
	return tabExport.join("-");
}

module.exports = reverseDate()