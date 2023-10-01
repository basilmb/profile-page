const express = require('express')
const path = require('path')

const app = express()
const pablicPath = path.join(__dirname,'public')

app.use(express.static(pablicPath))
app.listen(9000)