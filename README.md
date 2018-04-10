# URL Shortener
A simple URL shortener microservice made for [Free Code Camp](https://freecodecamp.com/) back-end project.

View live at: https://url.gomix.me

## Example Usage:
You can create a shortened url with the `/new` endpoint:

https://url.glitch.me/api/new/exampleWebsite.com

https://url.glitch.me/api/new/http:/exampleWebsite.com/

https://url.glitch.me/api/new/https://exampleWebsite.com/exampleRoute


#### Example Output:
```json
{
  "originalUrl": "exampleWebsite.com",
  "shortUrl": "https://url.gomix.me/HJimWZiBg"
}
```

```json
{
  "originalUrl": "exampleWebsite.com/exampleRoute",
  "shortUrl": "https://url.gomix.me/BJEHW-sBg"
}
```

To use, simply visit the shortened URL.



## View URL database
If for some reason you want to see the entire list of shortened URL's, you can do so with the following endpoint:
https://url.glitch.me/api/showurls
