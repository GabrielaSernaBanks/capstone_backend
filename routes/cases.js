const express = require('express');
const router = express.Router();
const casesController = require('../controller/casesController');

router
  .route('/')
  .get(casesController.index)

  router
  .route('/:therapist_id')
  .get(casesController.getTherapistCases)

  router
  .route('/case/:case_id')
  .get(casesController.getSingleCase)

  router
  .route('/changecase/:case_id')
    //need help with this PUT endpoint
  .put(casesController.updateTherapistIDinsideCase)

  router
  .route('/case/:therapist_id/:case_id')
  .get(casesController.specificCaseforTherapist)

module.exports = router;










