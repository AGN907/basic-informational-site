const http = require('http')
const fs = require('fs/promises')
const url = require('url')
async function navigateTo(page) {
  const file = await fs.readFile(page + '.html')

  return file
}

http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  const route = url.parse(req.url).href
  let page;
  if (route === '/') {
    page = await navigateTo('index')
  } else if (route === '/contact') {
    page = await navigateTo('contact-me')
  } else if (route === '/about') {
    page = await navigateTo('about')
  } else {
    page = await navigateTo('404')
  }

  res.write(page)
  res.end()
}).listen(8080)
