Scenario: Realizando atendimento
    Given Eu estou na página de atendimentos
    When Eu seleciono a opção de novo atendimento
    Then Aparece o formulário do atendimento a ser preenchido
    When Eu preencho todos os campos do atendimento daquele paciente
    Then Eu posso clicar em finalizar atendimento
    And Eu posso ver a confirmação da realização do atendimento