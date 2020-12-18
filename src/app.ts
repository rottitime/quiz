import app from './server'
import mongoose from 'mongoose'
import config from './config'

app.listen(config.port, () => console.log('Server running'))

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err))
