var { examples, pushAtendimento } = require('./constants')
var { removeAcento, removeWhiteSpaces } = require('./helper')

function addAtendimento (app) {
    app.post('/addAtendimento', function (req, res) {
        let atendimento = req.body
        let atendimentoList = pushAtendimento(atendimento)
        res.send(atendimentoList)
        // res.sendStatus(200)
    })
}
// [ ]

function listAtendimentos (app) {
    app.get('/listAtendimentos', (req, res) => {
        let prontuarios = examples.PRONTUARIO_LIST
        let atendimentos = prontuarios.reduce((acc, prontuario) => {
            return acc.concat(prontuario.atendimento)
        },[])
        console.log(atendimentos)
        res.send(atendimentos)
        return atendimentos
    })
}

function filterByDateRange (app) {

}

function filterByPatient (app) {
    app.get('/filterAtendimentoByPatient', (req, res) => {
        let patient = req.params.patient
        let prontuarios =  examples.PRONTUARIO_LIST
        let filteredPront = prontuarios.filter((prontuario) => {
            return removeWhiteSpaces(removeAcento(prontuario.paciente.nome)).includes(removeWhiteSpaces(removeAcento(patient)))
        })
        let selectedAtendimentos = filteredPront.reduce((acc, prontuario) => {
            return acc.concat(prontuario.atendimento)
        },[])
        
        res.send(selectedAtendimentos)
    })
}

function filterByDoctor (app) {
    app.get('/filterAtendimentoByDoctor', (req, res) => {
        let doctor = req.params.doctor
        let atendimentos = listAtendimentos(app)
        let filtered = atendimentos.filter((atendimento) => {
            return atendimento.includes(doctor)
        })
        res.send(filtered)
    })
}

function initAtendimento (app) {
    addAtendimento(app)
    listAtendimentos(app)
    filterByDateRange(app)
    filterByDoctor(app)
    filterByPatient(app)

}

module.exports = { initAtendimento }