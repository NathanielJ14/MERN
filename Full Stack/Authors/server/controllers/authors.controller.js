const Author = require("../models/authors.model")

module.exports.apiTest = (req, res)=>{
    res.json({message: "It is working"})
}


module.exports.allAuthors = (req, res)=>{
    Author.find()
        .then(authorList=> res.json(authorList))
        .catch(err=>res.json(err))
}


module.exports.oneAuthor = (req, res)=>{
    Author.findOne({_id: req.params.id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json(err))
}

module.exports.createAuthor = (req, res)=>{
    const newAuthor = req.body
    Author.create(newAuthor)
        .then(addedAuthor => res.json(addedAuthor))
        .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res)=>{
    Author.findOneAndUpdate(
        {_id: req.params.id}, //criteria
        req.body, // updated info,
        {new: true, runValidators: true} // config
    )
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json(err))
}

module.exports.deleteAuthor = (req, res)=>{
    Author.deleteOne({_id: req.params.id})
        .then(message => res.json(message))
        .catch(err => res.json(err))
}