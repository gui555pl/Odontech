var { examples, pushAgendamento } = require('./constants')
var { removeAcento, removeWhiteSpaces } = require('./helper')


function addAgendamento (app) {
    app.post('/addAgendamento', function (req, res) {
        let agendamento = req.body
        let agendamentoList = pushAgendamento(agendamento)
        res.send(agendamentoList)
        // res.sendStatus(200)
    })
}

function listAgendamento (app) {
    app.get('/listAgendamento', (req, res) => {
        let agendamentos = getAtendimentosList
        res.send(agendamentos)
    })
}


function initiAgendamento (app) {
    addAgendamento(app)
    listAgendamento(app)
}

module.exports = initiAgendamento