const express = require('express');
const cors = require('cors')
require('dotenv').config();

const PORT = process.env.PORT||2020

const routes = require('./src/routes/aluno.route');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/aluno', routes);


app.listen(PORT, () => {
    console.log('Respondendo na porta ' + PORT);
});