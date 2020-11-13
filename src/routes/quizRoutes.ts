import { Request, Response, Application } from 'express'
import { fetchQuizQuestions, Difficulty } from "../services/openTrivia";
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from "unique-names-generator";
import Quiz from "../models/quiz";

const NAME_CONFIG: Config = {
    dictionaries: [adjectives, colors, animals],
    separator: '-',
    style: 'capital'
}

module.exports = (app: Application) => {

    app.get('/test', (req: Request, res: Response) => {
        const randomName: string = uniqueNamesGenerator(NAME_CONFIG)

        res.send({ message: `Room name:  ${randomName}` })
    })

    app.get('/api/all', async (req: Request, res: Response) => {
        const quizs = await Quiz.find()
        res.send(quizs)
    })

    app.post('/api/quiz', async (req: Request, res: Response) => {

        const { host, players } = req.body
        const code: string = uniqueNamesGenerator(NAME_CONFIG)
        const game = await fetchQuizQuestions(10, Difficulty.EASY)

        const quiz = new Quiz({
            code,
            host,
            players,
            game
        })

        try {
            const newQuiz = await quiz.save()
            console.log(newQuiz.id)
            res.send(newQuiz)
        } catch (err) {
            res.send(err)
        }
    })

}