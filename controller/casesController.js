const knex = require('knex')(require('../knexfile'));
const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

exports.index = (_req, res) => {
  knex('cases')
    .then((data) => {
      res.status(200).json(data);
    }
    )
}

exports.getTherapistCases = (req, res) => {
  knex('cases')
    .where({ therapist_id: req.params.therapist_id })
    .then((data) => {
      if (!data.length) {
        return res.status(404).send('Therapist not found')
      }
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving therapist cases ${req.params.therapist_id} ${err}`)
    );
}

exports.getSingleCase = (req, res) => {
  knex('cases')
    .where({ case_id: req.params.case_id })
    .then((data) => {
      if (!data.length) {
        return res.status(404).send('Case not found')
      }
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving case ${req.params.case_id} ${err}`)
    );
}

exports.specificCaseforTherapist = (req, res) => {
  knex('cases')
    .where({ case_id: req.params.case_id }, { therapist_id: req.params.therapist_id })
    .then((data) => {
      if (!data.length) {
        return res.status(404).send('Case not found')
      }
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving case ${req.params.case_id} ${err}`)
    );
}

//this is where i need help; it does not update the therapist_id in mySQL table 'cases'
exports.updateTherapistIDinsideCase = async (req, res) => {
  try {
    const { case_id } = req.params;
    console.log(case_id)
    const { therapist_id } = req.body;
    console.log(therapist_id)

    await knex("cases")
      .join('therapists', 'therapists.id', '=', 'cases.therapist_id')
      .where('cases.case_id', '=', case_id)
      .update('cases.therapist_id', therapist_id)
    res
      .status(200)
      .send(`case ${id} updated successfully with ${therapist_id}`)
  } catch (err) {
    console.log(err);
    return res.status(400).send(`Error updating case`)
  }
}