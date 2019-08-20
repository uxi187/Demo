/// <reference types="Cypress" />

import { Given, And } from "cypress-cucumber-preprocessor/steps";
import { login } from "../../../Pages/Login.page.js"
import {registeredUser } from "../../../../constants/registeredUserInfo"
 
Given('That user is on Login page', () => {
    login.loginTitle()
        .should(($text) => {
            expect($text).to.exist
            expect($text.text()).to.include(login.titleText())
        })
})

When('user enter invalid email {string}', emails => {
    login.email().type(emails)
    cy.contains(login.loginBtn()).click()
})

When('user submit login form with valid credentials', () => {
    login.email().type(registeredUser.email)
    login.password().type(registeredUser.password)
    cy.contains(login.loginBtn()).click()
})

When('user click on link {string}', (link) => {
    cy.contains(link).click()
})

When('user submit login form with invalid password', () => {
    login.email().type(registeredUser.email)
    login.password().type("123456")
    cy.contains(login.loginBtn()).click()
})

When('user submit login form with invalid username', () => {
    login.email().type('invalid@example.com')
    login.password().type('Test1!')
    cy.contains(login.loginBtn()).click()
})
