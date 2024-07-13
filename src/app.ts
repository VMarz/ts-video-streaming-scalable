import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import bodyParser from 'body-parser';
//import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import { authMiddleware } from './middlewares/authMiddleware';

const app = express();
const server = createServer(app);
const io = new Server(server);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
//app.use('/api/users', authMiddleware, userRoutes);


// Servir archivos estáticos
app.use(express.static(__dirname + '/../public'));

// Exportar el servidor y el objeto io
export { app, server, io };
