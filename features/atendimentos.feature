Feature: Mostrar atendimentos filtrados para o dentista 
	As um dentista utilizando o sistema
	I want to visualizar atendimentos que eu já realizei
	So that eu possa ter acesso a essas informações

############################## GUI Scenarios  ##############################

Scenario: O dentista precisa filtrar todos os atendimentos por mês.
	Given Eu estou na página de "Atendimentos"
	And Os atendimentos "João Asfora Rodrigues, 123456789-01, consulta, 09, 04, 2020, 10:59, Igor Henrique" e "João Asfora Rodrigues, 123456789-01, cirurgia, 15, 04, 2020, 10:59, Galindo Vinícius" e "João Asfora Silva, 987654321-98, consulta, 09, 03, 2020, 12:59, Karlos Gubianni" estão armazenadas no sistema.
	When Eu escolho filtrar pelo mês "Abril"
	Then Eu vejo uma lista com os atendimentos de nome do paciente, CPF do paciente, tipo, dia, mês, ano, hora, nome do dentista com os valores "João Asfora Rodrigues, 123456789-01, consulta, 09, 04, 2020, 10:59, Igor Henrique" e "João Asfora Rodrigues, 123456789-01, cirurgia, 15, 04, 2020, 10:59, Galindo Vinícius"

Scenario: O dentista precisa filtrar todos os atendimentos pelo tipo.
	Given Eu estou na página de "Atendimentos"
	And Os atendimentos "João Asfora Rodrigues, 123456789-01, consulta, 09, 04, 2020, 10:59, Igor Henrique" e "João Asfora Rodrigues, 123456789-01, cirurgia, 15, 04, 2020, 10:59, Galindo Vinícius" e "João Asfora Silva, 987654321-98, consulta, 09, 03, 2020, 12:59, Karlos Gubianni" estão armazenadas no sistema.
	When Eu escolho filtrar pelo tipo "cirurgia"
	Then Eu vejo uma lista com o atendimento de nome do paciente, CPF do paciente, tipo, dia, mês, ano, hora, nome do dentista com os valores "João Asfora Rodrigues, 123456789-01, cirurgia, 15, 04, 2020, 10:59, Galindo Vinícius"

Scenario: O dentista precisa filtrar todos os atendimentos pelo CPF do paciente.
	Given Eu estou na página de "Atendimentos"
	And Os atendimentos "João Asfora Rodrigues, 123456789-01, consulta, 09, 04, 2020, 10:59, Igor Henrique" e "João Asfora Rodrigues, 123456789-01, cirurgia, 15, 04, 2020, 10:59, Galindo Vinícius" e "João Asfora Silva, 987654321-98, consulta, 09, 03, 2020, 12:59, Karlos Gubianni" estão armazenadas no sistema.
	When Eu escolho filtrar pelo CPF "987654321-98"
	Then Eu vejo uma lista com o atendimento de nome do paciente, CPF do paciente, tipo, dia, mês, ano, hora, nome do dentista com os valores "João Asfora Silva, 987654321-98, consulta, 09, 03, 2020, 12:59, Karlos Gubianni"

Scenario: O dentista precisa filtrar todos os atendimentos pelo mês, porém não existem atendimentos registrados naquele mês.
	Given Eu estou na página de "Atendimentos"
	And Os atendimentos "João Asfora Rodrigues, 123456789-01, consulta, 09, 04, 2020, 10:59, Igor Henrique" e "João Asfora Rodrigues, 123456789-01, cirurgia, 15, 04, 2020, 10:59, Galindo Vinícius" e "João Asfora Silva, 987654321-98, consulta, 09, 03, 2020, 12:59, Karlos Gubianni" estão armazenadas no sistema.
	When Eu escolho filtrar pelo mês "Janeiro"
	Then Eu vejo uma mensagem de erro com "Não existem atendimentos para esse período"

############################## Service Scenarios ##############################

Scenario: Filtro de atendimentos por tipo..
	Given Os atendimentos "João Asfora Rodrigues, 123456789-01, consulta, 09, 04, 2020, 10:59, Igor Henrique" e "João Asfora Rodrigues, 123456789-01, cirurgia, 15, 04, 2020, 10:59, Galindo Vinícius" e "João Asfora Silva, 987654321-98, consulta, 09, 03, 2020, 12:59, Karlos Gubianni" estão armazenadas no sistema.
	When o usuário solicita o filtro de atendimentos por tipo "cirurgia"
	Then o sistema retorna um atendimento incluindo informações com nome do paciente, CPF do paciente, tipo, dia, mês, ano, hora, nome do dentista com os valores "João Asfora Rodrigues, 123456789-01, cirurgia, 15, 04, 2020, 10:59, Galindo Vinícius"

Scenario: Filtro de atendimentos por data, porém não existe nenhum atendimento registrado nesse período. O sistema retorna um código de erro.
	Given Os atendimentos "João Asfora Rodrigues, 123456789-01, consulta, 09, 04, 2020, 10:59, Igor Henrique" e "João Asfora Rodrigues, 123456789-01, cirurgia, 15, 04, 2020, 10:59, Galindo Vinícius" e "João Asfora Silva, 987654321-98, consulta, 09, 03, 2020, 12:59, Karlos Gubianni" estão armazenadas no sistema.
	When o usuário solicita o filtro de atendimentos pelo mês "Janeiro"
	Then o sistema retorna o código de erro "404"
