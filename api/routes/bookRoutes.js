'use strict'

module.exports = (app)=>{
    const bookController = require('../controller/bookController')

    app.route('/book')
        .get(bookController.listAllBooks)
        .post(bookController.addOneBooks)

    app.route('/book/:bookId')
        .get(bookController.listOneBooks)
        .put(bookController.updateBook)
        .delete(bookController.removeBook)
}