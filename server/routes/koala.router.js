const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET
koalaRouter.get('/', (req, res) =>{
    let queryText = `SELECT * FROM "koalas";`
    pool.query(queryText)
        .then((result) =>{
            res.send(result.rows)
        })
        .catch((error) => {
            console.log("Error getting koalas", error)
            res.sendStatus(500)
        })
});

// POST
koalaRouter.post('/', (req, res) => {
  let newKoala = req.body
  console.log('New 🐨', newKoala)

  let queryText = `
  INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes")
  VALUES ($1, $2, $3, $4, $5);
  `
  pool.query(queryText, [
    newKoala.name, 
    newKoala.gender, 
    newKoala.age, 
    newKoala.ready_to_transfer,
    newKoala.notes
  ])
  .then(result => {
    res.sendStatus(201)
  })
  .catch(error => {
    console.log('Error adding 🐨', error)
    res.sendStatus(500)
  })
})

// PUT


// DELETE

module.exports = koalaRouter;