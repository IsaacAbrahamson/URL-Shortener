import mongoose from "mongoose"

const urlSchema = new mongoose.Schema({
  url: String
})

export default mongoose.model('Url', urlSchema)