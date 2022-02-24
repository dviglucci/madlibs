const router = require('express').Router();
const User = require('../db/models/User.js');

// POST /api/user/:id
router.post('/:id', async (req, res, next) => {
  try {
    const userToCreate = await User.create(req.body);
    res.status(201).send(userToCreate);
  } catch (error) {
    next(error);
  }
});

module.exports = router
