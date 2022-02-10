//TA04 PLACEHOLDER
const express = require("express");
const router = express.Router();

const controllerTA04 = require('../controllers/controllerTA04');

router.get("/", controllerTA04.getIndex);

router.post('/change-style', controllerTA04.changeStyle);

router.post('/counter-inc', controllerTA04.incCounter);

router.post('/counter-dec', controllerTA04.decCounter);

router.post('/reset', controllerTA04.resetSession);

module.exports = router;
