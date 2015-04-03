var express = require('express');
var router = express.Router();

/* GET orders home page. */
router.get('/', function(req, res, next) {
  res.render('orders/index', { title: 'Place an order' });
});

module.exports = router;
