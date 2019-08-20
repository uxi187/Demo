import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import { login } from "../../../Pages/Login.page.js"
import { registration } from "../../../Pages/Registration.page"

Given('That user is on Registration page', () => {
    login.registerFree()
        .should('be.visible')
        .click()
    registration.registrationPageTitle()
        .should('have.text', registration.registrationPageTitleText())
})

When('user fill registration form with data', dataTable => {
    dataTable.hashes().forEach(element => {
        registration.firstName().type(element.firstname)
        registration.lastName().type(element.lastname)
        registration.email().type(element.email)
        registration.password().type(element.password)
        registration.passwordAgain().type(element.verifypassword)
    });
})

And('submit registration form', () => {
    registration.registerBtn()
        .should('be.visible')
        .click()
})

When('users fill registration form with data {string} {string} {string} {string} {string}',
    (firstname, lastname, email, password, verifypassword) => {

        registration.firstName().type(firstname)
        registration.lastName().type(lastname)
        registration.email().type(email)
        registration.password().type(password)
        registration.passwordAgain().type(verifypassword)
    })

