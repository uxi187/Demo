
import { Then, And } from "cypress-cucumber-preprocessor/steps";
import { forgottenPasswordPopUp } from "../../../Pages/LoginPopUp/ForgotPasswordPopUp.page"
import { confirmationForgottenPasswordPopUp } from "../../../Pages/LoginPopUp/ConfirmationForgotPassPopUp.page"

Then('forgotten password pop up is shown', () => {
    forgottenPasswordPopUp.title()
        .should('be.visible')
        .and('have.text', forgottenPasswordPopUp.popUpTitle())
    forgottenPasswordPopUp.popUpTextContains(forgottenPasswordPopUp.popUpText())
})

Then('user is on confirmation pop up page', () => {
    confirmationForgottenPasswordPopUp.title()
        .should('be.visible')
        .and('have.text', confirmationForgottenPasswordPopUp.titleText())
})