/// <reference types="Cypress" />
//page text variables 
const title_text = 'Trainsmart login'

//page locators 
const title_field = '.login-title'
const email_field = '#username'
const password_field = '#password'
const remember_me_field = '#remember'
const login_btn_field = 'Login'
const forgotten_password_field = 'span.login-link4444'
const register_free_field = 'a.login-link'
const toaster_message_field = '#toast-container .toast-title'

export const login = {

    //#region Page text
    titleText() { return title_text },
    social_tweeter_api() { return 'api.twitter.com/oauth' },
    social_facebook_api() { return 'facebook.com' },
    //#endregion


    loginTitle() {
        return cy.get(title_field)
    },

    email() {
        return cy.get(email_field, { timeout: 4000 })
    },

    password() {
        return cy.get(password_field)
    },

    rememberMe() {
        return cy.get(remember_me_field)
    },

    forgotenPasswordLink() {
        return cy.get(forgotten_password_field)
    },

    registerFree() {
        return cy.get(register_free_field)
    },

    loginBtn() {
        return login_btn_field
    },

    tweeterLink() {
        return cy.get(social_tweeter_link)
    },

    facebookLink() {
        return cy.get(social_facebook_link)
    },

    toasterErrorMessage() {
        return cy.get(toaster_message_field)
    }

}