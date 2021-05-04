var examples = {
    AGENDAMENTO_LIST: [
    ],
    PRONTUARIO_LIST: [
        {
            id: '1',
            paciente: {
                nome: 'João Asfora Rodrigues',
                cpf: '123456789-01',
                endereco: 'R. Industrial José Paulo Alimonda - San Martin, Recife - PE, 50760-710',
                DOB: '01/10/1987',
                sexo: 'M',
                diabetico: true,
                hipertenso: true,
                gravidez: false,
                alergias: 'Amendoim'

            },
            atendimento: [
                {
                    medico_responsavel: 'Igor Henrique',
                    queixas: 'Dentes sensíveis',
                    procedimento_realizado: 'Correção de esmalte',
                    medicamento_prescrito: 'Dipirona',
                    data: "09-04-2020, 10:59",
                    tipo: "consulta",
                    prontID: "1"
                },
                {
                    medico_responsavel: 'Galindo Vinícius',
                    queixas: 'Dor profunda ao mastigar',
                    procedimento_realizado: 'Remoção dos dentes sisos',
                    medicamento_prescrito: 'Tramadol',
                    data: "15-04-2020, 10:59",
                    tipo: "cirurgia",
                    prontID: "1"

                }
            ]
        },
        {
            id: '2',
            paciente: {
                nome: 'João Asfora Silva',
                cpf: '987654321-98',
                endereco: 'Rua Conde de Irajá - Torre, Recife - PE, 50710-310',
                DOB: '10/01/1978',
                sexo: 'M',
                diabetico: false,
                hipertenso: false,
                gravidez: false,
                alergias: 'Anafilaxia'

            },
            atendimento: [
                {
                    medico_responsavel: 'Karlos Gubiani',
                    queixas: 'Dente quebrado',
                    procedimento_realizado: 'Reconstrução da coroa',
                    medicamento_prescrito: 'Tramadol',
                    data: "09-03-2020, 10:59",
                    tipo: "cirurgia",
                    prontID: "2"
                }
            ]
        },
    ]
}

function pushProntuario (prontuario) {
    examples.PRONTUARIO_LIST.push(prontuario)
    return examples.PRONTUARIO_LIST
}

function pushAtendimento (atendimento) {
    let prontID = atendimento.prontID
    let index = examples.PRONTUARIO_LIST.findIndex((el) => {
        if (el.id == prontID)
            return true
        return false
    })
    examples.PRONTUARIO_LIST[index].atendimento.push(atendimento)
    return examples.PRONTUARIO_LIST[index].atendimento
}

module.exports = { examples, pushProntuario, pushAtendimento }