drop database if exists cursos;
create database cursos charset=UTF8 collate utf8_general_ci;
use cursos;

create table alunos(
    id_aluno integer not null primary key auto_increment,
    nome varchar(30) not null,
    nascimento varchar(70) not null
);

create table curso(
    id_curso integer not null primary key auto_increment,
    curso varchar(60) not null,
    duracao varchar(20) not null
);

create table cursados(
    id_alunos integer not null,
    id_curso integer not null,
    data varchar(70) not null,
   foreign key (id_alunos) references alunos(id_aluno),
   foreign key (id_curso) references curso(id_curso)
);

show tables;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Prova-Patterns/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Prova-Patterns/docs/cursos.csv'
INTO TABLE curso
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;



LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Prova-Patterns/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from alunos;
select * from curso;
select * from cursados;

 INSERT INTO alunos VALUES (default, 'Maria de Pedro', '30/11/2022');
 UPDATE alunos SET nome = 'Renan Pedro', nascimento = '21/08/1985' where id = 5;
 
  DELETE FROM alunos where id_aluno = 5;
