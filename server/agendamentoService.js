var { examples, pushAgendamento } = require('./constants');
var { removeAcento, removeWhiteSpaces } = require('./helper');


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

function checkIfAgendamentoIsAvaiable (app) {
    app.get('/checkIfAgendamentoIsAvaiable', (req, res) => {
        let { dentist, date, time }= req.query
        let isAvb = checkIfAvailable(dentist, date, time)
        res.send(isAvb)
    })
}

function checkIfAvailable (dentist, date, time) {
    const dateToAdd = new Date(`${date} ${time}`)
    const sameDateArr = this.events.filter((event) => {
        return event.dentist === dentist && event.start.getTime() == dateToAdd.getTime()
    })
    return sameDateArr.length === 0
}


function initAgendamento (app) {
    addAgendamento(app)
    listAgendamento(app)
    checkIfAgendamentoIsAvaiable(app)
}

module.exports = { initAgendamento }