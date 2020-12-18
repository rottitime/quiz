import { Request, Response, Application } from 'express'
import { fetchQuizQuestions, Difficulty } from '../services/openTrivia'
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator'
import Quiz from '../models/quiz'

const NAME_CONFIG: Config = {
  dictionaries: [adjectives, colors, animals],
  separator: '-',
  style: 'capital'
}

export default (app: Application) => {
  app.get('/jatest', async (_req, res) => {
    res.json({ message: 'pass!' })
  })

  app.get('/test', (_req: Request, res: Response) => {
    const randomName: string = uniqueNamesGenerator(NAME_CONFIG)

    res.send({ room: `Room name:  ${randomName}` })
  })

  app.get('/api/all', async (_req: Request, res: Response) => {
    const quizs = await Quiz.find()
    res.send(quizs)
  })

  //create quiz
  app.post('/api/quiz', async (req: Request, res: Response) => {
    const { host, players } = req.body
    const code: string = uniqueNamesGenerator(NAME_CONFIG)

    try {
      const game = await fetchQuizQuestions(10, Difficulty.EASY)

      const quiz = new Quiz({
        code,
        host,
        players,
        game
      })

      const newQuiz = await quiz.save()
      res.send(newQuiz)
    } catch (err) {
      console.log('***********err', err)
      res.status(500).send(err)
    }
  })
}
