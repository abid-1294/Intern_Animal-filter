const express = require('express')
const dbConnection = require('./config/dbconnection')
const app = express()


const port = 3000
dbConnection

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})