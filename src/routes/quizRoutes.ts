import { Request, Response, Application } from 'express'

module.exports = (app: Application) => {

    app.get('/test', (req: Request, res: Response) => {
        res.send({ message: 'Hello World v1' })
    })

}