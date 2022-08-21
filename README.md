# URL Shortener
A url shortener REST API built using express.js and MongoDB.

https://url.iabrahamson.com

## Overview

I originally made this as a simple url shortener API for a back-end project in 2018. After completing the API, I built a simple front-end to interact with it.

This project was initially built on [glitch.com](https://glitch.com) and used MongoDB Atlas as a database. In 2022, I moved this project to my own webserver and updated it to use a local MongoDB database, Mongoose ODM, and modern ES6 JavaScript.

## Features
- Express.js and MongoDB backend
- MVC architecture
- REST api
- Modern javascript features such as ES modules, fetch API, and top-level await
- Simple frontend app to interact with REST api

## Shortening url with the web app

## Shortening url with the REST api
You can create a shortened url with the `/new` endpoint:

https://url.glitch.com/api/new/exampleWebsite.com

https://url.glitch.com/api/new/http:/exampleWebsite.com/

https://url.glitch.com/api/new/https://exampleWebsite.com/exampleRoute


#### Example Output:
```json
{
  "originalUrl": "exampleWebsite.com",
  "shortUrl": "https://url.glitch.com/HJimWZiBg"
}
```

```json
{
  "originalUrl": "exampleWebsite.com/exampleRoute",
  "shortUrl": "https://url.glitch.com/BJEHW-sBg"
}
```

To use, simply visit the shortened URL.



## View URL database
If for some reason you want to see the entire list of shortened URL's, you can do so with the following endpoint:
https://url.glitch.com/api/showurls



## Installation

You will need Node.js and MongoDB installed locally to run this project.

Install all dependencies:
```
npm install
```

Start:
```
npm start
```
