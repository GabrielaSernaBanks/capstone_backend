const express = require('express');
const router = express.Router();
const casesController = require('../controller/casesController');

router
  .route('/')
  .get(casesController.index)




module.exports = router;










