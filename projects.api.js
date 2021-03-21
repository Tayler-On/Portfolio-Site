"use strict";

const { response } = require("express");
// require the Express module
const express = require("express");
// Creates an new router object
const projects = express.Router();

const pool = require("./connection");

projects.get("/projects", (req, res) => {
  console.log(`here`);
  let query = `SELECT * FROM projects`;
  pool.query(query).then((response) => {
    res.json(response.rows);
  });
});

// export routes for use in server.js
module.exports = projects;
