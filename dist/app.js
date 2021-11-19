"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.severHttp = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const severHttp = http_1.default.createServer(app);
exports.severHttp = severHttp;
const io = new socket_io_1.Server(severHttp, {
    cors: {
        origin: "*"
    }
});
exports.io = io;
io.on("connection", socket => {
    console.log(`Usuari conectado no socket ${socket.id}`);
});
// para usar json nas req
app.use(express_1.default.json());
app.use(routes_1.router);
