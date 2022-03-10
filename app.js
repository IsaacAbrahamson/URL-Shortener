const express = require('express')
const app = express()
const newUrl = require('./controllers/urlController').newUrl
const showUrls = require('./controllers/urlController').showUrls
const latest = require('./controllers/urlController').latest
const count = require('./controllers/urlController').count
const redirect = require('./controllers/urlController').redirect
const PORT = process.env.PORT || 3000

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => res.render('index'))
app.get('/api', (req, res) => res.render('api'))

app.get('/api/new/*', (req, res) => newUrl(req, res, req.params[0]))
app.get('/api/all', (req, res) => showUrls(req, res))
app.get('/api/latest', (req, res) => latest(req, res))
app.get('/*', (req, res) => { if(req.params[0] !== 'favicon.ico') redirect(req, res, req.params[0]) })

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}...`))