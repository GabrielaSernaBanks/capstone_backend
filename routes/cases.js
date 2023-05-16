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
  .put(casesController.updateTherapistIDinsideCase)

  router
  .route('/changecase/:id')
  .put(casesController.updateTherapistIDinsideCase)

  router
  .route('/case/:therapist_id/:case_id')
  .get(casesController.specificCaseforTherapist)

module.exports = router;










