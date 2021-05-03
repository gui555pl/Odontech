
var { examples, pushProntuario} = require('./constants')

function removeAcento (text)
{       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}

function removeWhiteSpaces (text) {
    return text.replace(/ +/g, "").toLowerCase().trim()
}

function addProntuario(app) {
    app.post('/addProntuario', function (req, res) {
        let pront = req.body
        let prontuarioList = pushProntuario(pront)
        res.send(prontuarioList)
        // res.sendStatus(200)
    })
}

function findProntuarioByName(app) {
    app.get('/findProntuarioByName', (req, res) => {
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
}

module.exports = { initProntuario }