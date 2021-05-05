const express = require('express')
const cors = require('cors')
const indexRoute = require('./routes/index')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  next()
})

// app.use(
//   cors({
//     origin: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//   })
// )

app.use(indexRoute)

const server = app.listen(4000, () => {
  console.log('Server started at port 4000')
})
const io = require('./socket').init(server)
io.on('connection', (socket) => {
  console.log('new user connected')
})
