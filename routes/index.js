var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/quizes/question', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/answer', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
