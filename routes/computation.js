var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  r=Math.random();
  log=Math.log(r);
  res.send(`Math log applied to ${r} is ${log}`);
});

module.exports = router;
var r =0;
var log=0;
