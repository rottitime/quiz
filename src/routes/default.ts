module.exports = app => {

    app.get('/test', (req: express.Request, res: express.Response) => {
        res.send({ message: 'Hello World v1' })
    })

}