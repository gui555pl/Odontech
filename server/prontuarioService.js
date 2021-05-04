
var { examples, pushProntuario} = require('./constants')
var { removeAcento, removeWhiteSpaces } = require('./helper')

function addProntuario(app) {
    app.post('/addProntuario', function (req, res) {
        let pront = req.body
        pront.id = examples.PRONTUARIO_LIST.length
        let prontuarioList = pushProntuario(pront)
        res.send(prontuarioList)
        // res.sendStatus(200)
    })
}

function findProntuarioByCPF(app) {
    app.get('/findProntuarioByCPF', (req, res) => {
        let CPF = req.query.CPF
        prontuarioList = examples.PRONTUARIO_LIST
        var found = prontuarioList.find((el) => {
            console.log(CPF)
            if (el.paciente.cpf === CPF)
                return true
            return false
        })
        if (found) {
            res.send(found)
        } else {
            res.status(404).send('Nenhum prontuário encontrado')
        }
    })
}

function findProntuarioByName(app) {
    app.get('/findProntuarioByName', (req, res) => {
        console.log(req.query)
        let name = req.query.name
        prontuarioList = examples.PRONTUARIO_LIST
        var found = prontuarioList.find((el) => {
            console.log(removeWhiteSpaces(removeAcento(el.paciente.nome)))
            if (removeWhiteSpaces(removeAcento(el.paciente.nome)) === removeWhiteSpaces(removeAcento(name)))
                return true
            return false
        })
        if (found) {
            res.send(found)
        } else {
            res.status(404).send('Nenhum prontuário encontrado')
        }
    })
}

function initProntuario (app) {
    addProntuario(app)
    findProntuarioByName(app)
    findProntuarioByCPF(app)
}

module.exports = { initProntuario }