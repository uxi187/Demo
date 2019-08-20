import {login} from "../Pages/Login.page"
//page text variables
const registartion_page_title_text = 'Create your Trainsmart account'


//page logators
const registartion_page_title_field = '.login-title'
const first_name_field = '#firstName'
const last_name_field = '#lastName'
const email_field = '#userName'
const password_again_field = '#password-again'
const quit_btn = 'Quit'
const register_btn = 'input[value="Register"]'
const error_notification_locator = '.register-validation-message'
const recaptcha_iframe_locator = '#g_recaptcha iframe'
const recaptcha_checkbox_locator = '#recaptcha-anchor'


export const registration  = {

    //#region Page text variables
    registrationPageTitleText(){
        return registartion_page_title_text
    },
    //#endregion

    registrationPageTitle(){
        return cy.get(registartion_page_title_field)
    },
    firstName(){
        return cy.get(first_name_field)
    },
    lastName(){
        return cy.get(last_name_field)
    },
    email(){
        return cy.get(email_field)
    },
    password(){
        return login.password()
    },
    passwordAgain(){
        return cy.get(password_again_field)
    },
    registerBtn(){
        return cy.get(register_btn)
    },
    quitBtn(){
        return quit_btn
    },
    errorNotification(){
        return cy.get(error_notification_locator)
    },
    recaptchaIframe(){
        return cy.get(recaptcha_iframe_locator)
    },
    recaptchaIframeCheckbox(){
        return recaptcha_checkbox_locator
    },

}