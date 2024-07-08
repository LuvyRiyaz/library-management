const express = require('express');
const router = express.Router();
const booksController = require('../controllers/bookControllers');


router.get('/getbooks', booksController.getAllBooks);
router.post('/addbook', booksController.addBook);


module.exports = router;
