Scenario: Realizando atendimento
    Given Eu estou na página de atendimentos
    When Eu seleciono a opção de novo atendimento
    Then Aparece o formulário do atendimento a ser preenchido
    When Eu preencho todos os campos do atendimento daquele paciente
    Then Eu posso clicar em finalizar atendimento.
    And Eu posso ver a confirmação da realização do atendimento.

Scenario: Falhando ao preencher informações no atendimento
    Given Eu estou na página de atendimentos
    When Eu seleciono a opção de novo atendimento
    Then Aparece o formulário do atendimento a ser preenchido
    When Eu preencho um ou mais campos do atendimento de forma errada
    Then Eu posso clicar em finalizar atendimento.
    And Eu posso ver a mensagem de erro na realização do atendimento.

Scenario: Não preenchendo informações no atendimento
    Given Eu estou na página de atendimentos
    When Eu seleciono a opção de novo atendimento
    Then Aparece o formulário do atendimento a ser preenchido
    When Eu não preencho um ou mais campos obrigatórios do atendimento
    Then Eu posso clicar em finalizar atendimento
    And Eu posso ver a mensagem de erro na realização do atendimento

Scenario: Analisando atendimentos
    Given Eu estou na página de atendimentos
    When Eu vejo os atendimentos do dia
    Then Eu analiso os atendimentos sendo exibidos