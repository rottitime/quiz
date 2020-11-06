"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
// import path from "path"
var ws_1 = __importDefault(require("ws"));
var port = 5000;
var app = express_1.default();
var server = http_1.default.createServer();
// const wss = new WebSocket.Server({ server })
var wss = new ws_1.default.Server({ port: 8080 });
wss.on('connection', function (ws) {
    //startup initial connection
    console.log('A new client has connected!');
    ws.send('Welcome new client');
    ws.on('message', function (message) {
        console.log('recieved: %s', message);
        wss.clients.forEach(function (client) {
            // if (client !== ws && client.readyState === WebSocket.OPEN)
            if (client.readyState === ws_1.default.OPEN)
                client.send(message);
        });
    });
});
// app.use(express.static('public'))
// const wss = new WebSocket.Server({ port: 8080 });
// wss.on('connection', function connection(ws) {
//     console.log('A new client has connected!')
//     ws.send('Welcome new client')
//     ws.on('message', function incoming(message) {
//         console.log('received: %s', message);
//     });
//     ws.send('something');
// });
app.get('/test', function (req, res) {
    res.send({ message: 'Hello World v1' });
});
app.use(express_1.default.static('public'));
app.listen(port, function () { return console.log('Server running'); });
// //** Web sockets */
// const webSocketsServerPort = 8000;
// const webSocketServer = require('websocket').server;
// const http = require('http');
// // Spinning the http server and the websocket server.
// const server = http.createServer();
// server.listen(webSocketsServerPort);
// const wsServer = new webSocketServer({
//     httpServer: server
// });
// // I'm maintaining all active connections in this object
// const clients: any = {};
// // This code generates unique userid for everyuser.
// const getUniqueID = () => {
//     const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//     return s4() + s4() + '-' + s4();
// };
// wsServer.on('request', function (request: any) {
//     var userID = getUniqueID();
//     console.log('********' + (new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');
//     // You can rewrite this part of the code to accept only the requests from allowed origin
//     const connection = request.accept(null, request.origin);
//     clients[userID] = connection;
//     console.log('*****connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients))
// });
