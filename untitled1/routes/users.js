var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('users');
  const object = {name:'shreejit',lastname:'ray'};
  res.send(JSON.stringify(object));
});

module.exports = router;
