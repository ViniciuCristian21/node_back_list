import express from 'express';
import { router } from './routes';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';



const app = express()
app.use(cors())

const severHttp = http.createServer(app);
const io = new Server(severHttp, {
    cors: {
        origin: "*"
    }
});

io.on("connection", socket => {
    console.log(`Usuari conectado no socket ${socket.id}`);
})

// para usar json nas req
app.use(express.json());
const port = 4000;

app.use(router);



severHttp.listen(port, () => console.log(`Server is running in: ${port}`));