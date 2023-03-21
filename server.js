const express = require('express')
const app = express()
const port = 80

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html')
})

app.get('/donations', (req, res) => {
  res.sendFile(__dirname + '/donations.html')
})

app.get('/catalog', (req, res) => {
  res.sendFile(__dirname + '/catalog.html')
})

app.get('/privacypolicy', (req, res) => {
  res.sendFile(__dirname + '/privacypolicy.html')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})