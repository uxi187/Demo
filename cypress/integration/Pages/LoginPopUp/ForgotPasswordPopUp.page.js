//page text variables 
const pop_up_title = 'Forgot Password?'
const pop_up_text = 'Please enter your username and we will send a password reset '

//page locators 
const pop_up_title_locator = 'h2.forgot-pass-title'
const modal_content_locator = '.modal-content'
const forgotten_email_input_field = '.forgot-pass-input'
const forgotten_submit_form_field = '.forgot-pass-btn'


export const forgottenPasswordPopUp = {

    //#region Page text
    popUpTitle() {
        return pop_up_title
    },

    popUpText() {
        return pop_up_text
    },
    //#endregion


    //#region Page locators
    title() {
        return cy.get(pop_up_title_locator)
    },

    popUpTextContains(partOfTest) {
        cy.get(modal_content_locator)
            .find('p')
            .should(($p) => {
                const texts = $p.map((i, el) => Cypress.$(el).text())
                const paragraphs = texts.get()
                expect(paragraphs[0]).to.include(partOfTest)
            })
    },

    email() {
        return cy.get(forgotten_email_input_field)
    },

    submitForgottenPasswordForm() {
        return cy.get(forgotten_submit_form_field)
    }
    //#endregion

}