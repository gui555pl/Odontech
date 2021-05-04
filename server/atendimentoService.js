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
        let atendimentos = getAtendimentosList()
        res.send(atendimentos)
    })
}

function getAtendimentosList () {
    let prontuarios = examples.PRONTUARIO_LIST
    let atendimentos = prontuarios.reduce((acc, prontuario) => {
        return acc.concat(prontuario.atendimento)
    },[])
    
    return atendimentos
}

function filterByDateRange (app) {
    app.get('/filterAtendimentoByRange', (req, res) => {
        let from = req.query.from
        let to = req.query.to
        let atendimentos = getAtendimentosList(app)
        console.log(atendimentos)
        let filteredAtendimentos = atendimentos.filter((atendimento) => {
            let time = atendimento.data
            let daates = time.split(",", 2)
            console.log(daates)
            let day = daates[0]
            let hour = daates[1]
        })
        res.send('oi')
    })
}

function filterByPatient (app) {
    app.get('/filterAtendimentoByPatient', (req, res) => {
        let patient = req.query.patient
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
        let doctor = req.query.doctor
        let atendimentos = getAtendimentosList(app)
        let filtered = atendimentos.filter((atendimento) => {
            return atendimento.medico_responsavel.includes(doctor)
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