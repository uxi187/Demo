import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import { header } from "../../../Pages/Header.page"
import { footer } from "../../../Pages/Footer.page"
import { registeredUser, coachUser } from "../../../../constants/registeredUserInfo"

Given('User is on Home page', () => {
    //automatically log in with the user to build up state
    cy.loginByForm(
        registeredUser.email,
        registeredUser.password)

    //navigate to home page
    cy.visit('/#/home')
    header.header().should('be.visible')
    header.logOut().should('be.visible')
})

Given('Coach user is on Home page', () => {
    //automatically log in with the Coach user to build up state
    cy.loginByForm(
        coachUser.email,
        coachUser.password)

    //navigate to home page
    cy.visit('/#/home')
    header.checkUserIsCoach().should('be.visible')
    header.header().should('be.visible')
    header.logOut().should('be.visible')
})

When('user open header link {string} by navigating to external button link {string}', (link, btn) => {
    header.verifyExternalLinksContains(btn, link)
})

When('user open footer link {string} by navigating to external button link {string}', (link, btn) => {
    footer.verifyExternalLinksContains(btn, link)
})

When('user open footer logo link {string}', (link) => {
    footer.verifyFooterLogoContains(link)
})