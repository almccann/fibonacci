const express = require('express');
const app = express();
const fibonacci = require('./recursive.js');

const validate = (req, res, next) => {
  const position = req.params.position;
  if (Number(position) && Number(position) > 0) {
    next()
  } else {
    res.send('Not accepted');
  }
};

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/fibonacci/:position', validate, (req, res) => {
  res.json({
    "position": Number(req.params.position), 
    "value": fibonacci(Number(req.params.position))
  });
});

module.exports = app;
