const express = require('express');
const router = express.Router();
const queryFunctions = require('../db/user');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  if (!isNaN(req.params.id)) {
    queryFunctions.oneUser(req.params.id)
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

module.exports = router;
