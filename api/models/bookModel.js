'use strict'

const mongoose = require('mongoose')
var Schema = mongoose.Schema

var bookSchema = Schema({
    title: {
        type: String
    },
    autor: {
        type: String
    }
})

module.exports = mongoose.model('book', bookSchema)