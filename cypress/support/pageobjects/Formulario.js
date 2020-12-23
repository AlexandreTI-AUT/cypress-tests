/// <reference types="Cypress" />

import FormularioElements from '../elements/FormularioElements'
const formularioElements = new FormularioElements
import faker from 'faker'


class Formulario{

    preenchercampos(){

        //Essa variavel gera o nome
        const nome = faker.name.findName ()
        //Essa variavel gera o sobrenome
        const sobrenome = faker.name.findName ()
        //Essa variavel gera o email
        const geradoremail = faker.internet.email()
        //Essa variavel recebe o email gerado
        const email = geradoremail
       
        cy.get(formularioElements.campoNome()).type(nome)
        cy.get(formularioElements.campoSobrenome()).type(sobrenome)
        cy.get(formularioElements.campoEmail()).type(email)
        cy.get(formularioElements.campoComfirmaEmail()).type(email)
        cy.get(formularioElements.campoTelefone()).type('0119999-9999')
        cy.get(formularioElements.radiobuttonIdade3149()).click({force: true})
        cy.get(formularioElements.comboExperiencia())
           .select('mais de 5 anos')  
           .should('have.value', 'mais-de-5-anos')
        cy.get(formularioElements.desafio())
           .select('Desafio')  
           .should('have.value', 'desafio')
        cy.get(formularioElements.radiobuttonMelhorar()).click({force: true})
        cy.get(formularioElements.campoLinguagem()).type('JS, C#, Java, Ruby')
        cy.get(formularioElements.campoCarreira())
          .type('Eu quero me desenvolver mais em linguagens de programação e ferramentas para automação.')



    }

    enviarFormulario(){
        cy.get(formularioElements.btnEnviar()).click({force: true})
        cy.get('.nf-response-msg > p').should('contain', 'Your form has been successfully submitted.')
        

    }

}

export default Formulario;