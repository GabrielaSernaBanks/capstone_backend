const knex = require('knex')(require('../knexfile'));
const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

exports.index = (_req, res) => {
  knex('cases')
    .then((data) => {
      res.status(200).json(data);
    }
    )
}