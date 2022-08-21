import express from 'express'
import api from './routes/api.js'
import { redirect } from './controllers/urlController.js'

// Configure express
const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use('/api/', api)
app.get('/', (req, res) => res.render('index'))
app.get('/:_id', redirect)

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Express server listening on port ${PORT}...`))