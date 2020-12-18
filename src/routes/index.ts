import { Application } from 'express'

import quizRoutes from './quizRoutes'
import pusherRoutes from './pusherRoutes'

export default (app: Application) => {
  quizRoutes(app)
  pusherRoutes(app)
}
