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

//GET ID
exports.listOneBooks = (req, res)=>{
    book.find({"_id":req.params.bookId}, (error, book)=>{
        if(error){
            res.send(error)
        } else {
            res.json(book)
        }
    })
}

//POST
exports.addOneBooks = (req, res)=>{
    newBook = new book(req.body)
    newBook.save((error, book)=>{
        if(error){
            res.send(error)
        }
        res.json(book)
    })
}

//PUT
exports.updateBook = (req, res)=>{
    book.findOneAndUpdate({"_id":req.params.bookId}, req.body, {new: true}, (error, book)=>{
        if(error){
            res.send(error)
        }
        res.json(book)
    })
}

//DELETE
exports.removeBook = (req, res)=>{
    book.remove({_id: req.params.bookId}, (error, book)=>{
        if(error){
            res.send(error)
        } else {
            res.json({message: "your book was deleted"})
        }
    })
}