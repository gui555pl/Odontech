Feature: Busca por prontuário de um paciente

	As um dentista utilziando o sistema
	I want to acessar um prontuário de um paciente específico
	So that eu possa ter acesso às suas informações

############################## GUI Scenarios  ##############################

Scenario: O dentista busca por um prontuário usando o CPF do paciente. O sistema retorna um item para ser exibido na lista.
	Given eu estou na página "Prontuários"
	When Eu digito o CPF "123456789-01" no campo de busca por CPF
	And Eu requisito o sistema para "buscar"
	Then O sistema mostra um item com "Prontuário de João Asfora Rodrigues"

Scenario: O dentista busca por um prontuário usando o nome do paciente. O sistema retorna dois itens para serem exibidos na lista.
	Given eu estou na página "Prontuários"
	When Eu digito o nome "João Asfora" no campo de busca por nome
	And Eu requisito o sistema para "buscar"
	Then O sistema mostra um item com "Prontuário de João Asfora Rodrigues"
	And O sistema mostra um item com "Prontuário de João Asfora Silva"

Scenario: O dentista busca por um prontuário usando o CPF do paciente, porém não existe nenhum prontuário registrado com esse CPF. O sistema retorna uma mensagem de erro.
	Given eu estou na página "Prontuários"
	When Eu digito o CPF "999999999-99" no campo de busca por CPF
	And Eu requisito o sistema para "buscar"
	Then O sistema mostra uma mensagem de erro com "Nenhum prontuário encontrado"

Scenario: O dentista busca por um prontuário usando o CPF do paciente, porém sua conexão com a internet caiu. O sistema retorna uma mensagem de erro.
	Given eu estou na página "Prontuários"
	When Eu digito o CPF "999999999-99" no campo de busca por CPF
	And Eu requisito o sistema para "buscar"
	Then O sistema mostra uma mensagem de erro com "Houve um erro com sua requisição, verifique a sua conexão e tente novamente."

############################## Service Scenarios ##############################

Scenario: Busca de prontuários por CPF. O sistema retorna um prontuário
	Given os prontuários "1, João Asfora Rodrigues, 123456789-01, 09, 02, 2020, 08:37" e "2, João Asfora Silva, 987654321-98, 10, 04, 2019, 08:36" estão armazenados no sistema
	When o usuário solicita a busca de prontuários com CPF "123456789-01"
	Then o sistema retorna um prontuário incluindo informações como nome do paciente, CPF do paciente, dia de criação, mês de criação, ano de criação e hora de criação com os valores "João Asfora Rodrigues, 123456789-01, 09, 02, 2020, 08:37"

Scenario: Busca de prontuários por nome. O sistema retorna dois prontuários.
	Given os prontuários "1, João Asfora Rodrigues, 123456789-01, 09, 02, 2020, 08:37" e "2, João Asfora Silva, 987654321-98, 10, 04, 2019, 08:36" estão armazenados no sistema
	When o usuário solicita a busca de prontuários com nome "João Asfora"
	Then o sistema retorna dois prontuários incluindo informações como nome do paciente, CPF do paciente, dia de criação, mês de criação, ano de criação e hora de criação com os valores "João Asfora Rodrigues, 123456789-01, 09, 02, 2020, 08:37" e "João Asfora Silva, 987654321-98, 10, 04, 2019, 08:36"

Scenario: Busca de prontuários por CPF, porém não existe nenhum prontuário registrado com esse CPF. O sistema retorna um código de erro.
	Given os prontuários "1, João Asfora Rodrigues, 123456789-01, 09, 02, 2020, 08:37" e "2, João Asfora Silva, 987654321-98, 10, 04, 2019, 08:36" estão armazenados no sistema
	When o usuário solicita a busca de prontuários com CPF "999999999-99"
	Then o sistema retorna o código de erro "404"