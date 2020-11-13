import mongoose, { Schema } from "mongoose";
import playersSchema from "./players";

const quizSchema = new Schema({
    code: { type: String, required: true },
    host: { type: String, required: true },
    players: [playersSchema],
    game: Schema.Types.Mixed
}, {
    timestamps: true
})

const Quiz = mongoose.model('quiz', quizSchema)

export default Quiz