import mongoose, { Schema } from "mongoose";

const playersSchema = new Schema({
    name: String,
    // responded: { type: Boolean, default: false }
})

export default playersSchema