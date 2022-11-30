const curso = require('../models/curso.model')
const con = require('../dao/connection')

const readAll = (req, res ) => {
    con.query(curso.toRead(req.body), (err, result) => {
        if(err == null) {
            res.json(result).end()
        } else {
            res.json(err).end();
        }
    });
}

module.exports = {
    readAll
}