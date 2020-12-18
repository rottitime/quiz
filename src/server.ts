import express, { Application } from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import './models/quiz'
const app: Application = express()

//middleware
app.use(bodyParser.json())

//routes
routes(app)

// if (process.env.NODE_ENV === 'production') {
//express will serve up prod assets like
//main.js or main.css
app.use(express.static('client/build'))

//express will server up the index.html
//file if it does not recognise the route
const path = require('path')
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})
// }

export default app
