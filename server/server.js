const { initProntuario } = require('./prontuarioService');

// atendimento = require('atendimentoService')
const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());

(function main () {
    initProntuario (app)
})();


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})