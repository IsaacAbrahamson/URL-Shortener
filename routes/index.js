import { newUrl, showUrls, latest, redirect } from './controllers/urlController.js'

app.get('/', (req, res) => res.render('index'))
app.get('/api', (req, res) => res.render('api'))

app.get('/api/new/*', (req, res) => newUrl(req, res, req.params[0]))
app.get('/api/all', (req, res) => showUrls(req, res))
app.get('/api/latest', (req, res) => latest(req, res))
app.get('/*', (req, res) => { if (req.params[0] !== 'favicon.ico') redirect(req, res, req.params[0]) })