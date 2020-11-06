// const express = require('express')
import express from 'express'
import http from "http"
// import path from "path"
import WebSocket from "ws";

const port = 5000;
const app: express.Application = express()
const server = http.createServer()


// const wss = new WebSocket.Server({ server })
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    //startup initial connection
    console.log('A new client has connected!')
    ws.send('Welcome new client')

    ws.on('message', message => {
        console.log('recieved: %s', message)
        wss.clients.forEach(client => {
            // if (client !== ws && client.readyState === WebSocket.OPEN)
            if (client.readyState === WebSocket.OPEN)
                client.send(message)
        })
    })
})

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


app.get('/test', (req: express.Request, res: express.Response) => {
    res.send({ message: 'Hello World v1' })
})

app.use(express.static('public'))
app.listen(port, () => console.log('Server running'))

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
