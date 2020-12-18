import { Schema } from 'mongoose'

interface IPlayers extends Document {
  name: string
}

const playersSchema: Schema = new Schema({
  name: String
  // responded: { type: Boolean, default: false }
})

export default playersSchema
