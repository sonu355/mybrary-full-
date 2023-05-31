const express = require('express');
const router = express.Router();
const Author = require('../models/author')

//All author route
router.get('/', (req, res) => {
    res.render('authors/index');
})

//new author route
router.get('/new', (req, res) => {
    res.render('authors/new', {author: new Author()});
})

router.post('/', (req, res) => {
    const author = new Author({
        author: req.body.name
    })
    author.save((err, newAuthor) => {
        if(err) {
            res.render('authors/new', {
                author: author,
                errorMessage: "Error Creating Author"
            })
        }else{
            
        }
    })
    res.send(req.body.name);
})

module.exports = router
