import { Then, And } from "cypress-cucumber-preprocessor/steps";
import { registration } from "../../../Pages/Registration.page"
import { login } from "../../../Pages/Login.page.js"

Then('fields First name, Last name, Email, Password and Verify password are visible', () => {
    registration.firstName().should('be.visible')
    registration.lastName().should('be.visible')
    registration.email().should('be.visible')
    registration.password().should('be.visible')
    registration.passwordAgain().should('be.visible')
})

And('ReCaptcha screen is visible', () => {
    registration.recaptchaIframe()
        .iframe()
        .find(registration.recaptchaIframeCheckbox())
        .should('be.visible')
})

And('Quit option navigate user back to login page', () => {
    cy.contains(registration.quitBtn())
        .click()
    login.loginTitle()
        .should(($text) => {
            expect($text).to.exist
            expect($text.text()).to.include(login.titleText())
        })
})

Then('error is shown {string}', errormessage => {
    registration.errorNotification()
        .should('be.visible')
        .and('have.text', errormessage)
})