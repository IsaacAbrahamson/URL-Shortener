import { customAlphabet } from 'nanoid'
import validator from 'validator'
import mongoose from 'mongoose'
import Url from '../models/Url.js'
const nanoid = customAlphabet('1234567890abcdef', 5)

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
  let shortid = nanoid()

  // Check if url is a valid url
  if (!validator.isURL(url)) {
    res.json({ 'error': `'${url}' is not a valid URL.` })
    return
  }

  // Remove everything except domain in url
  url = url.replace(/^.*:\/\//i, '').replace(/\/+$/, '')

  // Only create new short url if one doesn't exist for that domain
  const existing = await Url.findOne({ url })
  if (existing) {
    shortid = existing.shortid
  } else {
    await Url.create({ shortid, url })
  }

  res.json({ 'originalUrl': url, 'shortUrl': '/' + shortid })
}

async function redirect(req, res) {
  const shortid = req.params.shortid

  // Do not redirect favicon request from browser
  if (shortid === 'favicon.ico') return

  // Redirect or show error if invalid url
  try {
    const urls = await Url.find({ shortid })
    res.redirect('http://' + urls[0].url)
  } catch {
    res.json({ 'error': `'${shortid}' is not a valid short URL.` })
  }
}

export { showUrls, newUrl, redirect }