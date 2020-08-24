const express = require('express');

const todo = require('./eventsModel');

const router = express.Router();

router.get('/', (req, res) => {
  todo
    .get()
    .then((stuff) => {
      res.status(200).json(stuff);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Server error retrieving the DATA.' });
    });
});

module.exports = router;
