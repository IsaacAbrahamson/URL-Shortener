import mongoose from 'mongoose'
import Url from './models/Url.js'

mongoose.connect('mongodb://localhost/urls')

const url = new Url({ url: 'iabrahamson.com' })
await url.save()