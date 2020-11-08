import express from 'express'
import { KeyProps } from "./config/keys";
import { fetchQuizQuestions, Difficulty } from "./services/openTrivia";
// import http from "http"

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
// const server = http.createServer()

app.get('/api/quiz/:roomid', async (req, res) => {
    const quiz = await fetchQuizQuestions(10, Difficulty.EASY)

    pusher.trigger("my-channel1", "my-event", {
        quiz
    });

    res.send({ quiz })
})

app.get('/pusher-test', (req: express.Request, res: express.Response) => {
    pusher.trigger("my-channel1", "my-event", {
        message: "hello world"
    });
    res.send({ message: 'All pushed' })
})


require('./routes/quizRoutes')(app)

// if (process.env.NODE_ENV === 'production') {
//express will serve up prod assets like 
//main.js or main.css
app.use(express.static('client/build'))

//express will server up the index.html 
//file if it does not recognise the route
const path = require('path')
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})
// }

app.listen(port, () => console.log('Server running'))