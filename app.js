import express from 'express'
import index from './routes/index.js'
import api from './routes/api.js'

// Configure express
const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))
app.get('/', index)
app.get('/api', api)

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Express server listening on port ${PORT}...`))