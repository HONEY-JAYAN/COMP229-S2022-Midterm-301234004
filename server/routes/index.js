// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const books = require('../models/books');

// define the game model
let book = require('../models/books');

let bookController = require('../controller/book')

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', (req, res, next) => {
  res.render('books/details', {
    title: 'Add book',
    books: ''
   });
});

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', bookController.processAddPage);

/* GET Route for processing the Edit page - UPDATE Operation */
router.get('/edit/:id', bookController.displayEditPage);

/* POST Route for processing the edit page - UPDATE Operation */
router.post('/edit/:id', bookController.processEditPage);

/* Get Route for processing the Delete page - DELETE Operation */
router.get('/delete/:id', bookController.performDelete);

module.exports = router;
