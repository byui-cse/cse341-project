//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const controllerTA03 = require('../controllers/controllerTA03');

router.get('/', controllerTA03.getProducts);

router.post('/', controllerTA03.searchProducts);

module.exports = router;
