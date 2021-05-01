Feature: Agendamento de horários do dentista

    A fim de agendar horários de atendimentos
    Como o recepcionista
    Eu quero ser capaz de gerenciar e criar novos agendamentos

#################### GUI SCENARIOS ####################

    Scenario: Criar um novo agendamento
    Given Eu estou no menu de agendamentos
    And O agendamento "12345678910" não aparece na lista de agendamentos
    When Eu seleciono a opção para adicionar um agendamento
    And Eu tento cadastrar o agendamento "12345678910" com nome "Maria"
    And Com horário para o dia 16 do mês 10 às 10:30 horas
    And Com médico responsável sendo "Felipe"
    Then Eu posso ver uma mensagem de confirmação
    And Eu vejo o agendamento "12345678910" com nome "Maria", médico "Felipe" e data para 16 do mês 10 às 10:30 horas na lista de agendamentos

    Scenario: Criar um agendamento com horário já indisponível
    Given Eu estou no menu de agendamentos
    And O agendamento "12345678910" não aparece na lista de agendamentos
    And O agendamento "01987654321" está marcado para o dia 16 do mês 10 às 10:30 horas
    When Eu seleciono a opção para adicionar um agendamento
    And Eu tento cadastrar o agendamento "12345678910" com nome "Maria"
    And Com horário para o dia 16 do mês 10 às 10:30 horas
    And Com médico responsável sendo "Felipe"
    Then Eu posso ver uma mensagem de agendamento inválido
    And Eu não vejo o agendamento "12345678910" na lista de agendamentos

    Scenario: Criar um agendamento com informações incompletas
    Given Eu estou no menu de agendamentos
    And O agendamento "12345678910" não aparece na lista de agendamentos
    When Eu seleciono a opção para adicionar um agendamento
    And Eu tento cadastrar o agendamento "12345678910" com nome "Maria"
    And Com médico responsável sendo "Felipe"
    And Sem data e hora para o agendamento
    Then Eu posso ver uma mensagem de agendamento inválido
    And Eu não vejo o agendamento "12345678910" na lista de agendamentos

################## SERVICE SCENARIOS ##################

    Scenario: Retornar o tempo restante até o agendamento
        Given O agendamento '12345678910' é armazenado no sistema para o dia 16 do mês 10 às 10:30 horas
        And Hoje é dia 15 o mês 10 às 09:00 horas
        When Eu solicito ao sistema o tempo restante até o agendamento '12345678910'
        Then O sistema retorna o tempo restante de 25 horas e 30 minutos

    Scenario: Impedir a criação de um agendamento inválido
        Given Eu desejo criar o agendamento '12345678910' no sistema para o dia 16 do mês 10 às 10:30 horas
        And Já existe um agendamento '01987654321' para esse mesmo horário
        When Eu solicito ao sistema a criação do agendamento '12345678910'
        Then O sistema retorna que o agendamento é inválido por conflito de horários
        And O agendamento '12345678910' não é armazenado