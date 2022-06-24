// index
// HONEY JAYAN
// Student-ID : 301234004
// bookstore-1234


// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const books = require('../models/books');

// define the model
let book = require('../models/books');


/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});
module.exports = router;
