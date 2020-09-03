const express = require('express');

const todo = require('./eventsModel');

const router = express.Router();

router.get('/', (req, res) => {
  todo
    .getTable()
    .then((resData) => {
      res.status(200).json(resData);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Server error retrieving the DATA.' });
    });
});

module.exports = router;
