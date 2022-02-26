const router = require('express').Router();
// const User = require('../db/models/User.js');
const Poem1 = require('../db/models/Poem1.js');
const Poem2 = require('../db/models/Poem2.js');
const Poem3 = require('../db/models/Poem3.js');
// const FinalPoem = require('../db/models/FinalPoem.js');
// const { User, Poem1, Poem2, Poem3, FinalPoem } = require('../db/index.js');
const { FinalPoem } = require('../db/index.js');

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

// POST /api/poems/poem3
router.post('/poem3', async (req, res, next) => {
    try {
      const poemInputs = await Poem3.create(req.body);
      res.status(201).send(poemInputs);
    } catch (error) {
      next(error);
    }
  });

// POST /api/poems/finalPoem
router.post('/finalPoem', async (req, res, next) => {
  console.log('REQ.BODY >>>>', req.body)
  try {
    const finalText = await FinalPoem.create(req.body);
    console.log('FINAL TEXT >>>', finalText) 
    res.status(201).send(finalText);
  } catch (error) {
    next(error);
  }
});

module.exports = router;