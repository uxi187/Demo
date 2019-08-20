import { Then, And } from "cypress-cucumber-preprocessor/steps";
import { login } from "../../../Pages/Login.page.js"
import { header } from "../../../Pages/Header.page"


Then('fields Email and Password are visible', () => {
    login.email().should('be.visible')
    login.password().should('be.visible')
})

And('Forgotten password link is visible', () => {
    login.forgotenPasswordLink().should('be.visible')
})

And('Remember me button is selected by default', () => {
    login.rememberMe().should('be.checked')
})

And('Register Free link is visible', () => {
    login.registerFree().should('be.visible')
})

And('Social login buttons are visible', table => {
    table.hashes().forEach(element => {
        cy.contains(element.links).should('be.visible')
    })
})

Then('Facebook API is triggered', () => {
    cy.window().its('open')
        .should('be.called')
        .and('be.calledWithMatch', login.social_facebook_api())
})

Then('Twitter API is triggered', () => {
    cy.location('href').should('include', login.social_tweeter_api())

  //  cy.url().should('include', login.social_tweeter_api())
})

Then('email validation is triggered', () => {
    login.email().should('have.css', 'border-color', 'rgb(250, 120, 126)')
})

Then('user is successfully logged in', () => {
    header.header().should('be.visible')
    header.logOut().should('be.visible')
})

Then('login is unsuccessful with toaster message {string}', message => {
    login.toasterErrorMessage().should('have.text', message)
})