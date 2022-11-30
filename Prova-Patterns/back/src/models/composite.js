const Alunos = require('./aluno.model')
const Curs = require('./curso.model')

const profissional = (lista) => {
    let curso = []
    let i = 0;
    let id_curso = lista[i].id_curso;
    curso.push(new Alunos(lista[i]))
    lista.forEach(e => { //Percorrendo lista
        if(id_curso != e.id_curso){ //Eliminando consultas duplicadas
            id_curso = e.id_curso
            curso.push(new Curs(e))
            i++
            curso[i].addAlum(new Curs(e))
           
        }else{
            consultas[i].addAlum(new Curs(e))
        }
    })
    const prof = lista[i]
    prof.curso = curso
    return new profissional(prof);
}

module.exports = profissional;