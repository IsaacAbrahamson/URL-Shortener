import express from 'express'
import { newUrl, showUrls, latest } from './controllers/urlController.js'
const router = express.Router()

router.get('/api', (req, res) => res.render('api'))
router.get('/api/new/*', (req, res) => newUrl(req, res, req.params[0]))
router.get('/api/all', (req, res) => showUrls(req, res))
router.get('/api/latest', (req, res) => latest(req, res))