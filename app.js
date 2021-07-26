const express = require('express')
const app = express()
const port = 3000

// const reqTime = (req, res, next) => {
//   const time = Date.now()
//   const date = new Date(time) //轉換成object?
//   console.log(date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ' | Get from ' + req.originalUrl)
//   next()
// }

app.use(function (req, res, next) { 
  const time = Date.now()
  const startTime = new Date(time) //轉換成object?  
  const detail = startTime.getFullYear() + "/" + (startTime.getMonth() + 1) + "/" + startTime.getDate() + " " + startTime.getHours() + ":" + startTime.getMinutes() + ":" + startTime.getSeconds() + ' | Get from ' + req.originalUrl

  console.log(`接收時間:${detail}`)

  res.on('finish', () => {
    const endTime = Date.now()
    const finishTime = new Date(endTime) 
    const finishTimeDetail = finishTime.getFullYear() + "/" + (finishTime.getMonth() + 1) + "/" + finishTime.getDate() + " " + finishTime.getHours() + ":" + finishTime.getMinutes() + ":" + finishTime.getSeconds() + ' | Get from ' + req.originalUrl

    const duration = finishTime - time
    const durationSecond = new Date(duration)
    console.log(`結束時間:${finishTimeDetail} | 共花了 ${durationSecond.getSeconds()}秒`)    
  })
  next()
})

app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('列出全部 Todo')
  },8000)
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