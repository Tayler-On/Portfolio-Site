"use strict";

// require the Express module
const express = require("express");
// Creates an new router object
const summary = express.Router();

const pool = require("./connection");

summary.get("/summary", (req, res) => {
  console.log(`here`);
  let query = `SELECT * FROM summary`;
  pool.query(query).then((response) => {
    res.json(response.rows);
  });
});

// summary.get("/summary", (req, res) => {
//   let type = req.query.type;
//   let query = ``;
//   if (type) {
//     query = `SELECT * FROM summary WHERE type = '${type}'`;
//   } else {
//     query = `SELECT * FROM summary`;
//   }
//   pool.query(query).then((response) => {
//     res.json(response.rows);
//   });
// });

// export routes for use in server.js
module.exports = summary;
