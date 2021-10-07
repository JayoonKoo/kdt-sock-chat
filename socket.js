module.exports = (io) => {
	io.on('connection', (socket) => {
		console.log('A User is now connected');
		socket.on('chat message', (msg) => {
			// 브로드 케스팅 서버에 연결된 모든 사용자에게 뿌리기 ... 
			io.emit('chat message', msg);
			console.log(`message :`, msg);
		})
		socket.on('disconnect', () => {
			console.log('disconnected');
		});
	});
}
