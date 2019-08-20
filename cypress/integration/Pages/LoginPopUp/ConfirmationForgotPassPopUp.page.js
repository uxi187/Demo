//page text variables
const title_text = 'Information'

//page locators
const confirmation_pop_up_title = 'h1.modal-title'
const modal_content_locator = '.modal-content'
const confirmation_close_btn = 'Close'
const forgotten_submit_form_field = '.forgot-pass-btn'


export const confirmationForgottenPasswordPopUp = {

    titleText() {
        return title_text
    },

    title() {
        return cy.get(confirmation_pop_up_title)
    },

    closeBtn() {
        return cy.contains(confirmation_close_btn)
    }
}