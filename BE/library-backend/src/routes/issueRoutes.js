const express = require('express');
const router = express.Router();
const issuecontrollers = require ('../controllers/issueControllers')

router.post('/issuebook', issuecontrollers.issueBook);
router.post('/return', issuecontrollers.returnBook);
router.get('/overdue', issuecontrollers.handleNonReturnedBooks);
router.get('/getIssuedBook', issuecontrollers.getIssuedBooks);
router.get('/getReturnedBook', issuecontrollers.getReturnedBooks);

module.exports = router;
