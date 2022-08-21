# URL Shortener
A simple URL shortener microservice made for [Free Code Camp](https://freecodecamp.com/) back-end project.

View live at: https://url.glitch.com

## Example Usage:
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
