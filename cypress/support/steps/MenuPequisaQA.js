/* global Given, Then, When */

//import { when } from 'cypress/types/jquery';
import TelaPrincipal from '../pageobjects/TelaPrincipalPage'
import Formulario from '../pageobjects/Formulario'
const telaprincipal = new TelaPrincipal
const formulario = new Formulario

Given("Acesso ao site VV Test", () => {
    telaprincipal.acessarSite();
})

And("Clicar na aba Pesquisa QA", () => {
    telaprincipal.clicarAbaPESQUISADA();
})

And("Visualizar Questionário QA", () => {
    telaprincipal.visualizarQuestionarioQA();
})

When("Preencher todos os campos obrigatórios", () => {
    formulario.preenchercampos();
})

Then("Deve ser direcionado para uma página de sucesso", () => {
    formulario.enviarFormulario();
})
