const express = require('express')

const app = express()

const host = "127.0.0.1"
const port = 3000



app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.get('/contact', (req, res) => res.sendFile(__dirname + '/contact-me.html'))

app.get('/about', (req, res) => res.sendFile(__dirname + '/about.html'))

app.get('/*', (req, res) => res.sendFile(__dirname + '/404.html'))

app.listen(port, host, () => {
  console.log(`Listening on port http://${host}:${port}`)
})

