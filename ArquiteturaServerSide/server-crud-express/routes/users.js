var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id
  res.send(`Usuario ${id}`);
});

router.post('/', function(req, res, next) {
  res.send('cria usuario');
});

router.delete('/', function(req, res, next) {
  res.send('deleta usuario');
});

router.put('/', function(req, res, next) {
  res.send('atualiza usuario');
});


module.exports = router;
