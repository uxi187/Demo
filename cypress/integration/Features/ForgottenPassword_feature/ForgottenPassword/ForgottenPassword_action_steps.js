/// <reference types="Cypress" />
import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import { } from "../../Login_feature/Login/Login_action_steps"
import { login } from "../../../Pages/Login.page.js"
import { forgottenPasswordPopUp } from "../../../Pages/LoginPopUp/ForgotPasswordPopUp.page"
import { confirmationForgottenPasswordPopUp } from "../../../Pages/LoginPopUp/ConfirmationForgotPassPopUp.page"


When('user navigate to Forgotten password link', () => {
    login.forgotenPasswordLink()
        .should('be.visible').click()
})

And('submit forgotten password pop up with {string}', (email) => {
    forgottenPasswordPopUp.email()
        .should('be.visible')
        .type(email)
    forgottenPasswordPopUp.submitForgottenPasswordForm()
        .should('be.visible')
        .click()
})

And('confirmation dialog can be closed', () => {
    confirmationForgottenPasswordPopUp.closeBtn()
        .should('be.visible')
        .click()
    login.forgotenPasswordLink()
        .should('be.visible')

})