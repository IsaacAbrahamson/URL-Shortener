# URL Shortener
A simple URL shortener microservice made for [Free Code Camp](https://freecodecamp.com/) back-end project.

View live at: nurl.us

## Example Usage:
You can create a shortened url with the `/new` endpoint:

nurl.us/api/new/exampleWebsite.com

nurl.us/api/new/http:/exampleWebsite.com/

nurl.us/api/new/https://exampleWebsite.com/exampleRoute


#### Example Output:
```json
{
  "originalUrl": "exampleWebsite.com",
  "shortUrl": "nurl.us/HJimWZiBg"
}
```

```json
{
  "originalUrl": "exampleWebsite.com/exampleRoute",
  "shortUrl": "nurl.us/BJEHW-sBg"
}
```

To use, simply visit the shortened URL.



## View URL database
If for some reason you want to see the entire list of shortened URL's, you can do so with the following endpoint:
nurl.us/api/showurls
