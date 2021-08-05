const {client, syncAndSeed} = require('../db/db')
const express = require('express');
const homePage = require('../views/homePage');
const pubDetails = require('../views/publication-details');
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await client.query('SELECT * FROM publication');
    res.send(homePage(data.rows));
  } catch (err) { 
    next(err) 
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const data = await client.query("SELECT * FROM publication WHERE publication.id = $1", [req.params.id]);
    const singleData = data.rows[0];
    res.send(pubDetails(singleData));
  } catch (err) { 
    next(err) 
  }
});

module.exports = router;