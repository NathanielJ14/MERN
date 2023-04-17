const mongoose = require("mongoose")
// These are your values for your info 
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Authors name is required'],
        minLength: [3, "Name must be at least 3 characters long"]
    }

}, {timestamps: true})


const Author = mongoose.model('Author', AuthorSchema)
module.exports = Author