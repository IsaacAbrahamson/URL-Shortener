import nanoid from 'nanoid'
import validator from 'validator'
import mongoose from 'mongoose'
import Url from '../models/Url.js'

// Connect to database
const db = 'mongodb://localhost/urls'
try {
  await mongoose.connect(db)
  console.log(`Connected to database at ${db}`)
} catch (e) {
  console.error(e)
}

async function showUrls(req, res) {
  const urls = await Url.find().sort({ $natural: -1 }).limit(5)
  res.json(urls)
}

async function newUrl(req, res) {
  let url = req.params[0]
  const _id = nanoid(5)

  // Check if url is a valid url
  if (!validator.isURL(url)) {
    res.json({ 'error': `'${url}' is not a valid URL.` })
    return
  }

  // Remove everything except domain in url
  url = url.replace(/^.*:\/\//i, '').replace(/\/+$/, '')

  // Only create new short url if one doesn't exist for that domain
  const urlsCount = await Url.countDocuments({ url })
  if (urlsCount.length < 1) await new Url({ _id, url })

  res.json({ 'originalUrl': url, 'shortUrl': '/' + _id })
}

async function redirect(req, res) {
  const _id = req.params._id

  // Do not redirect favicon request from browser
  if (_id === 'favicon.ico') return

  // Redirect or show error if invalid url
  try {
    const urls = await Url.find({ _id })
    res.redirect('http://' + urls[0].url)
  } catch {
    res.json({ 'error': `'${_id}' is not a valid short URL.` })
  }
}

export { showUrls, newUrl, redirect }