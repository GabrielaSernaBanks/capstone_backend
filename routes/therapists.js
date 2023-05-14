const express = require('express');
const router = express.Router();
const therapistsController = require('../controller/therapistsController');

router
  .route('/')
  .get(therapistsController.index)

router
.route('/signup')
.post(therapistsController.signup)

router
.route('/login')
.post(therapistsController.login)


// router
//   .route('/:id')
//   .get(therapistsController.getInventoryItem)
//   .delete(therapistsController.deleteInventoryItem)
//   .put(therapistsController.updateInventoryItem)


module.exports = router;










