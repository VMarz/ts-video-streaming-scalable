import { io } from '../app';
import { Socket } from 'socket.io';

io.on('connection', (socket: Socket) => {
    console.log('A user connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });

    // Puedes agregar más eventos aquí
});
