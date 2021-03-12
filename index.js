const express = require('express')
const app = express()
const text = require('./alphaMap')

console.log(text['a'])

app.listen(3000, () => {
    console.log('App is listening on port 3000.')
})