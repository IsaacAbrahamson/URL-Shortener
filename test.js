import mongoose from 'mongoose'
import Url from './models/Url.js'

mongoose.connect('mongodb://localhost/urls')

const url = await Url.create({ url: 'iabrahamson.com' })
console.log(url)