const router = require('express').Router();
const User = require('../db/models/User.js');
const Poem1 = require('../db/models/Poem1.js');
const Poem2 = require('../db/models/Poem2.js');

// POST /api/poems/poem1
router.post('/poem1', async (req, res, next) => {
  try {
    const poemInputs = await Poem1.create(req.body);
    res.status(201).send(poemInputs);
  } catch (error) {
    next(error);
  }
});

// POST /api/poems/poem2
router.post('/poem2', async (req, res, next) => {
  try {
    const poemInputs = await Poem2.create(req.body);
    res.status(201).send(poemInputs);
  } catch (error) {
    next(error);
  }
});

module.exports = router;