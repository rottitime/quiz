import express from 'express'
import http from "http"
import { KeyProps } from "./config/keys";

const keys: KeyProps = require("./config/keys");
const Pusher = require("pusher");

const pusher = new Pusher({
    appId: keys.pusherAppId,
    key: keys.pusherKey,
    secret: keys.pusherSecret,
    cluster: keys.pusherCluster,
    useTLS: true
});

const port: number = keys.port;
const app: express.Application = express()
const server = http.createServer()

app.get('/pusher', (req: express.Request, res: express.Response) => {
    pusher.trigger("my-channel", "my-event", {
        message: "hello world"
    });
    res.send({ message: 'All pushed' })
})

app.get('/test', (req: express.Request, res: express.Response) => {
    res.send({ message: 'Hello World v1' })
})

app.use(express.static('public'))
app.listen(port, () => console.log('Server running'))