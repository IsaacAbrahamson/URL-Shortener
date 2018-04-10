const MongoClient = require('mongodb').MongoClient
const dbUrl = process.env.MLAB_URI
const shortid = require('shortid')
const validator = require('validator')

function showUrls(db, callback) {
  db.collection('urlCollection').find({}).limit(10).toArray( (err, results) => callback(results))
}

function latest(db, callback) {
  db.collection('latestUrls').find().sort({$natural:-1}).limit(5).toArray( (err, results) => callback(results))
}

function newUrl(db, url, callback) {
  var id = shortid.generate()

  if (validator.isURL(url)) {
    var validatedUrl = url.replace(/^.*:\/\//i, '') // remove protocol from url if it has one
    validatedUrl = validatedUrl.replace(/\/+$/, "") // remove trailing slash
    db.collection('urlCollection').find({ "url": validatedUrl }).toArray((err, results) => callback(null, results, validatedUrl, id))
  } else {
    callback(true)
  }
}

function redirect(db, id, callback) {
  db.collection('urlCollection').find({"_id": id}).toArray( (err, results) => callback(results))
}

module.exports = {
  showUrls(req, res) {
    MongoClient.connect(dbUrl, function(err, db) {
      showUrls(db, function(results) {
        db.close()
        res.json(results)
      })
    })
  },
  newUrl(req, res, url) {
    MongoClient.connect(dbUrl, function(err, db) {
      newUrl(db, url, function(err, results, validatedUrl, id) {
        if (err) {
          db.close()
          res.json({"error": `'${url}' is not a valid URL.`})
          return
        }
        
        // add url to latest
        db.collection('latestUrls').insertOne({"_id": id, "url": validatedUrl})
        .then(function() {
          db.close()
        })

        if (results.length < 1) {
          db.collection('urlCollection').insertOne({"_id": id, "url": validatedUrl}).then(function() {
            db.close()
            res.json({"originalUrl": validatedUrl, "shortUrl": `/${id}`})
          })
        } else {
          id = results[0]._id
          db.close()
          res.json({"originalUrl": validatedUrl, "shortUrl": `/${id}`})
        }
      })
    })
  },
  redirect(req, res, id) {
    MongoClient.connect(dbUrl, function(err, db) {
      redirect(db, id, function(results) {
        db.close()
        res.redirect('http://' + results[0].url)
      })
    })
  },
  latest(req, res) {
    MongoClient.connect(dbUrl, function(err, db) {
      latest(db, function(results) {
        db.close()
        res.json(results)
      })
    })
  }
}