// book
// HONEY JAYAN
// Student-ID : 301234004
// bookstore-1234


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const books = require('../models/books');

let book = require('../models/books');

module.exports.processAddPage = (req, res, next) => {
    let newBook = book({
        "Title" : req.body.title,
        "Description": req.body.description,
        "Price": req.body.price,
        "Author": req.body.author,
        "Genre": req.body.genre
    });

  book.create(newBook, (err, book)=>{
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else
    {
      res.redirect('/books');
    }
});
}

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  book.findById(id, (err, bookToEdit) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          res.render('books/details', {title: 'Edit Contact', books : bookToEdit})
      }
  });
}

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id

  let updateBook = book({
      "_id": id,
      "Title" : req.body.title,
      "Description": req.body.description,
      "Price": req.body.price,
      "Author": req.body.author,
      "Genre": req.body.genre
  });

  book.updateOne({_id: id}, updateBook, (err) =>{
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else{
          res.redirect('/books');
      }
  });
}


module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  book.remove({_id: id}, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          res.redirect('/books');
      }
  });
}