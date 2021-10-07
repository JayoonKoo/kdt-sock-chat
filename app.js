const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/public', express.static(__dirname + "/public"));

const indexRouter = require('./routes');
const clubsRouter = require('./routes/clubs');
const chataRouter = require('./routes/chat');

app.use('/', indexRouter);
app.use('/clubs', clubsRouter);
app.use('/chat', chataRouter);

server.listen(3000, () => {
	console.log("Express Server is now listening on localhost:3000...");
})
