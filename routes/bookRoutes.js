const {getAllBooks, getBookById, createBook, updateBook, deleteBook, filterquery} = require("../controllers/bookController.js")
const express = require("express")
const validateToken = require('../middleware/validateToken.js')
const validateCreateBook = require("../middleware/inputValidation.js")
const route = express.Router()

route.use(validateToken)
route.get('/getAllBooks', getAllBooks)
route.get('/getById/:id', getBookById)
route.post('/createBook',validateCreateBook, createBook)
route.put('/updateBook/:id', updateBook)
route.delete('/deleteBook/:id', deleteBook)
route.get('/filter', filterquery)


module.exports = route