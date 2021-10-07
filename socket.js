module.exports = (io) => {
	io.on('connection', (socket) => {
		console.log('A User is now connected');
		socket.on('disconnect', () => {
			console.log('disconnected');
		});
	});
}
