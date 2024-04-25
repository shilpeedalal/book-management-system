const {Schema, model} = require("mongoose")

const bookSchema = new Schema({
    title:{
        type: String
    },
    author:{
        type: String
    },
    publicationYear:{
        type: String
    }
})

module.exports = model('Book', bookSchema)