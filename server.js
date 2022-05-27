const express = require('express')
const app = express()

const defaultHandler = require('./handler')

app.get('/', defaultHandler)

module.exports = app
