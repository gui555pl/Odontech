Scenario: nova consulta
	Given eu estou na página de listagem dos pacientes
	And eu acho “Carlos” na lista de pacientes
	And eu seleciono “Carlos”
	And eu vou para o histórico de “Carlos”
	When eu crio uma nova consulta
	Then eu vou para a tela de informações da consulta
    And recebo um alerta
    #a linha acima deve ser removida
      
    
