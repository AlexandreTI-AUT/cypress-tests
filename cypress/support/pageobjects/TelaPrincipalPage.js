/// <reference types="Cypress" />

import VvTest from '../elements/VvTestesElements'
const homepage = new VvTest
const url = Cypress.config("baseUrl")

class TelaPrincipalPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    //Clica na aba Pesquisa-QA
    clicarAbaPESQUISADA() {
        cy.get(homepage.clicarAbaPESQUISADA()).click()
    }

    //visualizar Formulário-QA
    visualizarQuestionarioQA() {
        cy.get(homepage.visualizarQuestionarioQA()).should('contain', 'Pesquisa – QA')
    }
}

export default TelaPrincipalPage;
