const express = require('express');
const router = express.Router();
const summaryController = require('../controllers/summaryController');

router.get('/summary', summaryController.getAccountsSummary);

module.exports = router;
