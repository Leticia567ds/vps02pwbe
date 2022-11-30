const aluno = require('../models/aluno.model')
const con = require('../dao/connection')

const readAll = (req, res ) => {
    con.query(aluno.toreadAll(), (err, result) => {
        if(err == null) {
            res.json(result).end()
        } else {
            res.json(err).end();
        }
    });
}

const create = (req, res ) => {
    con.query(aluno.toCreate(req.body), (err, result) => {
        if(err == null) {
            res.json('Sucesso').end()
        } else {
            res.json(err).end();
        }
    });
}

const update = (req, res) => {
    con.query(aluno.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const del = (req, res) => {
        con.query(aluno.toDelete(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    readAll,
    create,
    update,
    del
}