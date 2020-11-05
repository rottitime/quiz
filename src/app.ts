// const express = require('express')
import express from 'express'

const app: express.Application = express()

app.get('/test', (req: express.Request, res: express.Response) => {
    res.send({ message: 'Hello World' })

})

app.listen(5000, () => console.log('Server running'))