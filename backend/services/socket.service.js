// EVENTS LIST:
const SOCKET_CONNECT = 'socket-connect';
const SOCKET_DISCONNECT = 'socket-disconnect';
const CHAT_JOIN = 'chat-join';
const CHAT_LEAVE = 'chat-leave';
const CHAT_SEND_MSG = 'chat-send-msg';
const CHAT_RECEIVE_MSG = 'chat-receive-msg';


module.exports = (io) => {

    io.on('connection', socket => {
        // I AM CONNECTED, HERE IS MY USERSID:
        //  socket.userId = ^
        // CHAT Funcs
        console.log('Hi there socket ID:', socket.id);
        io.emit(CHAT_JOIN, 'Hi there!');

        socket.on('disconnect', () => {
            console.log('Bye user with socket:', socket.id);
            socket.broadcast.emit(SOCKET_DISCONNECT, 'HE IS GONE:', socket.id);
        })

        socket.on(CHAT_SEND_MSG, msg => {
            console.log('got', msg)
            io.emit(CHAT_RECEIVE_MSG, msg);
        })

        // Notifications Funcs
    });

}