const fs = require("fs");

module.exports = (filePath) => {
  dataToRead = fs.readFileSync(filePath, { encoding: "utf-8" });

	const rows = dataToRead.split('\n');
	const headers = rows[0].split(',');

	const rowsData = [];

	rows.slice(1).forEach((row) => {
		if (row.length === 0) return;
		const rowData = {};
		const rowSplit = row.split(',');
		for (let headerIndex=0; headerIndex < headers.length; headerIndex++) {
			const header = headers[headerIndex];
			rowData[header] =  rowSplit[headerIndex];
		}

		rowsData.push(rowData);
	})
	return rowsData;
};
