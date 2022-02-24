const router = require('express').Router();
module.exports = router;

router.use('/user', require('./user.js'));
router.use('/poems', require('./poems.js'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
