"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var keys = require("./config/keys");
var Pusher = require("pusher");
var pusher = new Pusher({
    appId: keys.pusherAppId,
    key: keys.pusherKey,
    secret: keys.pusherSecret,
    cluster: keys.pusherCluster,
    useTLS: true
});
var port = keys.port;
var app = express_1.default();
var server = http_1.default.createServer();
app.get('/pusher', function (req, res) {
    pusher.trigger("my-channel", "my-event", {
        message: "hello world"
    });
    res.send({ message: 'All pushed' });
});
app.get('/test', function (req, res) {
    res.send({ message: 'Hello World v1' });
});
app.use(express_1.default.static('public'));
app.listen(port, function () { return console.log('Server running'); });
