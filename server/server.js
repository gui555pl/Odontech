const { initProntuario } = require('./prontuarioService');
const { initAtendimento } = require('./atendimentoService');
const { initAgendamento } = require('./agendamentoService');

const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

(function main () {
    initProntuario (app)
    initAtendimento (app)
    initAgendamento (app)
})();



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})