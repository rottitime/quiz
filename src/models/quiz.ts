import mongoose, { Schema, Document } from 'mongoose'
import playersSchema from './players'
import { QuestionType } from '../services/openTrivia'

type PlayersType = {
  name: string
}
interface IQuiz extends Document {
  code: string
  host: string
  game: QuestionType[]
  players: PlayersType[]
}

const quizSchema: Schema = new Schema(
  {
    code: { type: String, required: true },
    host: { type: String, required: true },
    players: [playersSchema],
    game: Schema.Types.Mixed
  },
  {
    timestamps: true
  }
)

export default mongoose.model<IQuiz>('quiz', quizSchema)
