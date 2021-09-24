'use sctrict'

const mongoose = require('mongoose')
var book = mongoose.model('book')

//GET ALL
exports.listAllBooks = (req, res)=>{
    book.find({}, (error, books)=>{
        if(error){
            res.send(error)
        } else {
            res.json(books)
        }
    })
}

