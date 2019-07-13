var express = require('express');
var router = express.Router();

var messages = [];

router.get('/', (req, res, next) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });  
});

// module.exports = router;
module.exports = { router, messages };
