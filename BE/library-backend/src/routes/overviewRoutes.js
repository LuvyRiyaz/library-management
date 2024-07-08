const express = require('express');
const { getLibraryOverview } = require('../controllers/overviewControllers');

const router = express.Router();

router.get('/overview', getLibraryOverview);

module.exports = router;
