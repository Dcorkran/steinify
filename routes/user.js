const express = require('express');
const router = express.Router();
const UserFunction = require('../db/user');
const SteinFunction = require('../db/beer_stein')
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  if (!isNaN(req.params.id)) {
    UserFunction.oneUser(req.params.id)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404);
        res.json('User Not Found');
      }
    });
  } else {
    res.status(500);
    res.json('Invalid ID');
  }
});

router.get('/:id/stein', function(req, res, next) {
  if (!isNaN(req.params.id)) {
    SteinFunction.getSteinById(req.params.id)
    .then((stein) => {
      if (stein) {
        res.json(stein);
      } else {
        res.status(404);
        res.json('User Not Found');
      }
    });
  } else {
    res.status(500);
    res.json('Invalid ID');
  }
});
module.exports = router;
