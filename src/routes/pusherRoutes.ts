import { Application, Request, Response } from 'express'
import { fetchQuizQuestions, Difficulty } from '../services/openTrivia'
import config from '../config'
const Pusher = require('pusher')

const pusher = new Pusher({
  appId: config.pusherAppId,
  key: config.pusherKey,
  secret: config.pusherSecret,
  cluster: config.pusherCluster,
  useTLS: true
})

export default (app: Application) => {
  app.get('/api/quiz/:roomid', async (_req: Request, res) => {
    const quiz = await fetchQuizQuestions(10, Difficulty.EASY)

    pusher.trigger('my-channel1', 'my-event', {
      quiz
    })

    res.send({ quiz })
  })

  app.get('/pusher-test', (_req: Request, res: Response) => {
    pusher.trigger('my-channel1', 'my-event', {
      message: 'hello world'
    })
    res.send({ message: 'All pushed' })
  })
}
