const express = require('express');
const router = express.Router();

const alunos = require ('../controllers/aluno.controller')

router.get('/read', alunos.readAll)
router.post('/create', alunos.create)
router.put('/alterar', alunos.update)
router.delete('/del', alunos.del)

module.exports = router;