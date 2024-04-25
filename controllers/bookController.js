const bookModel = require('../models/bookModel.js')
const { findById } = require('../models/userModel.js')

const getAllBooks = async(req, res) => {
    try{
        const books = await bookModel.find()
        if(books){
            res.status(200).json({response: books})
        } else{
            res.status(404).json({message: "Not Found"})
        }
    } catch(error){
        res.status(500).json({message: "Internal Server error", error: error})
    }
}

const getBookById = async(req, res) => {
    try{
        const book = await bookModel.findById(req.params.id)
        if(book){
            res.status(200).json({response: book })
        } else{
            res.status(404).json({message: "Not Found"})  
        }
    } catch(error){
        res.status(500).json({message: "Internal Server error", error: error})
    }

}

const createBook = async(req, res) => {
    try{
        const {title, author, publicationYear} = req.body
        if(!title || !author || !publicationYear){
            res.status(400).json({message: "Please provide all the details"})
        }

        const book = new bookModel(req.body)
        await book.save()

        if(book){
            res.status(200).json({response: book})
        } else{
            res.status(400).json({message: "Data is not saved"})
        }

    } catch(error){
        res.status(500).json({message: "Internal Server error", error: error})
    }
}

const updateBook = async(req, res) => {
    try{
        const {title, author, publicationYear} = req.body
        const book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new: true})

        const newData = await book.save()
        
        if(newData){
            res.status(201).json({response: newData})
        } else{
            res.status(400).json({message: "data is not updated"})
        }
    } catch(error){
        res.status(500).json({message: "Internal Server error", error: error})
    }
}

const deleteBook = async(req, res) => {
    try{
        const book = await bookModel.findByIdAndDelete(req.params.id)

        if(!book){
            res.status(404).json({message: "Book not found"})
        } else{
            res.status(200).json({message: "Book deleted successfully"})
        }
    } catch(error){
        res.status(500).json({message: "Internal Server error", error: error})
    }
}

const filterquery = async(req, res) => {
    try{
        const {author, publicationYear} = req.query
        let query = {}
        if(author) query.author = author
        if(publicationYear) query.publicationYear = publicationYear

        const books = await bookModel.find(query)
        if(books){
            res.status(200).json({message: books})
        } else{
            res.status(404).json({message: "Not found"})
        }
    } catch(error){
        res.status(500).json({message: "Internal server error"})
    }
}

module.exports = {getAllBooks, getBookById, createBook, updateBook, deleteBook, filterquery}
