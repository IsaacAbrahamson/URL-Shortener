# URL Shortener
A url shortener REST API built using express.js and MongoDB.

https://url.iabrahamson.com

## Overview

I originally made this as a simple url shortener API for a back-end project in 2018. After completing the API, I built a simple front-end to interact with it. I've made a couple edits since then to modernize some outdated libraries and code.

## Features
- Automatically redirect short URL's to an original URL
- Express.js and MongoDB REST api
- MVC architecture
- Mongoose.js ODM
- Modern javascript features such as ES modules, fetch API, and top-level await
- Simple frontend app to interact with REST api

## Shortening url with the web app

Enter the URL you wish to shorten:

![image](https://user-images.githubusercontent.com/17521691/185829448-e5ec02da-5a92-4542-bc91-f5c4ae6c5d78.png)

Copy or visit the shortened URL returned:

![image](https://user-images.githubusercontent.com/17521691/185829427-2c3706e0-1969-44a4-94fc-c61e2a1d2ab4.png)

## Shortening url with the REST api

Use `/api/new/<url>` endpoint to create a new short url. Example:
```
https://url.iabrahamson.com/api/new/github.com
https://url.iabrahamson.com/api/new/https://github.com/IsaacAbrahamson/URL-Shortener/
```
#### Example Output:
```json
{
  "originalUrl": "github.com",
  "shortUrl": "/57e2a"
}
```

```json
{
  "originalUrl": "github.com/IsaacAbrahamson/URL-Shortener",
  "shortUrl": "/70016"
}
```

Use `/api/all` to view entire `urls` collection.

Visit `url.iabrahamson.com/<shorturl>` to be redirected to the original website.

## Installation

You will need Node.js and MongoDB installed locally to run this project.

Install all dependencies:
```
npm install
```

Add a `.env` file with the location to a MongoDB database:
```bash
# Local MongoDB Database
DB_URL="mongodb://localhost/urls"

# MongoDB Atlas Database
DB_URL="mongodb+srv://urluser:urlpassword@cluster123.mongodb.net/?retryWrites=true&w=majority"
```

Start:
```
npm start
```
