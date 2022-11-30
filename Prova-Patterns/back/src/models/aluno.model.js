class Alunos{
    constructor(data){
        this.id_aluno = data.id_aluno;
        this.nome = data.nome;
        this.nascimento = data.nascimento
    }

    static toreadAll = () =>{
        return 'Select * from alunos'
    }
    static toCreate = (model) =>{
        return `INSERT INTO alunos VALUES (default, '${model.nome}', '${model.nascimento}')`
    }
    static toUpdate = (model) =>{
        return `UPDATE alunos SET nome = '${model.nome}', nascimento = '${model.nascimento}' where id_aluno =${model.id_aluno}`;
    }
    static toDelete = (model) =>{
        return `DELETE FROM  alunos where id_aluno =${model.id_aluno}`;
    }
}

module.exports = Alunos;