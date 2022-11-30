const express = require('express');
const router = express.Router();

const curso = require ('../controllers/curso.controller')

router.get('/read', curso.readAll)

module.exports = router;