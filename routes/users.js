var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  more=more+1;
  sum=sum+more;
  res.send('respond with a resource');
});

module.exports = router;
var sum =0;
var more=0;
