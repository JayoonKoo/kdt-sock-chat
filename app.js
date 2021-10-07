const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
	res.send('Express works!')
})

server.listen(3000, () => {
	console.log("Express Server is now listening on localhost:3000...");
})
