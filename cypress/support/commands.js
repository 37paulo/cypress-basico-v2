// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('page', () => {

    cy.visit('./src/index.html')
})

Cypress.Commands.add('firstname', () => {

    cy.get('#firstName').type('Marieta')
})

Cypress.Commands.add('lastname', () => {

    cy.get('#lastName').type('Meireles')
})

Cypress.Commands.add('email', () => {

    cy.get('#email').type('marieta@test.com')
})

Cypress.Commands.add('invalidemail', () => {

    cy.get('#email').type('jonas.con')
})

Cypress.Commands.add('textarea', () => {

    const texto = 'There are many variations of passages There are many variations of passages  There are many variations of passages There are many variations of passages'

    cy.get('#open-text-area').type(texto, ({ delay: 0 }))
})

Cypress.Commands.add('error', () => {

    cy.get('.error')
})

Cypress.Commands.add('success', () => {

    cy.get('.success')
})

Cypress.Commands.add('radiofeedback', () => {

    cy.get('input[type="radio"]')
   
})

Cypress.Commands.add('radioajuda', () => {

    cy.get('input[type="radio"]')
    
})

Cypress.Commands.add('radioelogio', () => {

    cy.get('input[type="radio"]')
    
})

Cypress.Commands.add('radios', () => {

    cy.get('input[type="radio"]')
    
})

Cypress.Commands.add('checkbox', () => {

    cy.get('input[type="checkbox"]')
    
})







