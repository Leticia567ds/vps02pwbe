
class Cursos{

    alunos = []

    constructor(data){
        this.id_curso = data.id_curso;
        this.curso = data.curso;
        this.duracao = data.duracao
        if (data.alunos != undefined)
        data.alunos.forEach(e => {
            this.alunos.push(e)
        })
    }

    addAlum(trat){
        this.alunos.push(trat)
     }

    static  toRead = () =>{
        return 'Select * FROM vw_tudo'
    }

}

module.exports = Cursos;