const knex = require('knex')(require('../knexfile'));
const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

const jsonSecretKey = "f91e4494-04b3-4d49-8c27-57faed9e5785";

const signToken = (email) => {
  return jwt.sign({ email }, jsonSecretKey)
}

exports.index = (_req, res) => {
  knex('therapists')
    .then((data) => {
      res.status(200).json(data);
    }
    )
}

exports.getOneTherapist = (req, res) => {
  knex('therapists')
    .where({id: req.params.therapist_id})
    .then((data) => {
      if (!data.length) {
        return res.status(404).send('Therapist not found')
      }
      res.status(200).json(data[0]);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving therapist ${req.params.id} ${err}`)
    );
}


exports.signup = (req, res) => {
      const therapist = {
        id: uuidv4(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        license_number: req.body.license_number,
        email: req.body.email,
        password: req.body.password
      }
      knex('therapists')
        .insert(therapist)
        .then((data) => {
          console.log(therapist)
          const newTherapistURL = `/therapists/${data[0]}`
          res
            .status(201)
            .location(newTherapistURL)
            .json({ user: therapist, token: signToken(therapist.email) })
        })
        .catch((err) => res.status(400).send(`Error creating Therapist: ${err}`));
    }

exports.login = async (req, res, next) => {
  try {
    const {email, password} = req.body
    const user = await knex('therapists').first('*').where({email})
    if (!user) {
      console.log("no such user found:", req.body.email)
      res.status(401).send("User not found")
    }
    if (user.password === password) {
      let token = jwt.sign({email: email}, jsonSecretKey)
      res
      .status(202, user, token)
      .json({user, token: token})
    } else {
      console.log("Incorrect password for user:", email)
      res.status(403).send("Wrong email or password")
    }
  }
  catch (err) {
    next(err)
  }
}

