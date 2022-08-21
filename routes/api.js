import express from 'express'
import { newUrl, showUrls } from '../controllers/urlController.js'
const router = express.Router()

router.get('/', (req, res) => res.render('api'))
router.get('/new/*', newUrl)
router.get('/all', showUrls)

export default router