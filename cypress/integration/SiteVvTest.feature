Feature: Acesse a página da VV Test

    Scenario: Acesse a página da VV Test
        Given Acesso ao site VV Test
        And Clicar na aba Pesquisa QA
        And Visualizar Questionário QA
        When Preencher todos os campos obrigatórios 
        Then Deve ser direcionado para uma página de sucesso
 
     
    