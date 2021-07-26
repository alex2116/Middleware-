const express = require('express')
const app = express()
const port = 3000
const time = Date.now()
var date = new Date(time)

app.use(function (req, res, next) {
  console.log(date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ' | Get from '+ req.originalUrl)
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

// function logOriginalUrl(req, res, next) {
//   console.log('Request URL:', req.originalUrl)
//   next()
// }

// function logMethod(req, res, next) {
//   console.log('Request Type:', req.method)
//   next()
// }

// var logStuff = [logOriginalUrl, logMethod]
// app.get('/user/:id', logStuff, function (req, res, next) {
//   res.send('User Info')
// })

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})