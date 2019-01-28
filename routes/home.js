var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home');

router.get('/', homeController.Index);
router.get('/about', homeController.About);

module.exports = router;