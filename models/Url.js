import mongoose from "mongoose"

const urlSchema = new mongoose.Schema({
  shortid: String,
  url: String
})

const Url = mongoose.model('Url', urlSchema)
export default Url