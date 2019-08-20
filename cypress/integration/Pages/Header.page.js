const header_locator = '#header'
const header_link_locators = '#header .links a'
const logout_link = '.logout'
const user_is_coach = '.quick-nav [ng-if="user.authorities && user.isCoach"]'

const client_name_locator = '#header .quick-nav .name'
const coach_locator = 'Coach'
const add_workout_locator = 'a[href="#/workout/manual"] button'
const trainsmart_logo_locator = '#header a.logo'
const my_training_locator = '#header #nav a[href="#/training"]'
const my_goals_locator = '#header #nav a[href="#/goals/fitness"]'
const my_profile_locator = '#header #nav a[href="#/profile/"]'
const physical_details_locator = '#header #nav a[href="#/physical-detail/health-screen"]'
const messages_locator = '#header #nav a[href="#/message/last"]'
const contacts_locator = '#header #nav a[href="#/contacts/friends"]'
const settings_locator = '#header #nav a[href="#/setting/personal-info"]'
const home_locator = '#header #nav a[href="#/home"]'


export const header = {

    header() {
        return cy.get(header_locator)
    },
    checkUserIsCoach(){
        return cy.get(user_is_coach)
    },

    clientName() {
        return cy.get(client_name_locator)
    },
    coach() {
        return cy.contains(coach_locator, { timeout: 8000 })
    },
    addWorkaut() {
        return cy.get(add_workout_locator)
    },
    trainsmartLogo() {
        return cy.get(trainsmart_logo_locator)
    },
    myTraining() {
        return cy.get(my_training_locator)
    },
    myGoals() {
        return cy.get(my_goals_locator)
    },
    myProfile() {
        return cy.get(my_profile_locator)
    },
    physicalDetail() {
        return cy.get(physical_details_locator)
    },
    messages() {
        return cy.get(messages_locator)
    },
    contacts() {
        return cy.get(contacts_locator)
    },
    settings() {
        return cy.get(settings_locator)
    },
    home() {
        return cy.get(home_locator)
    },


    logOut() {
        return cy.get(logout_link)
    },

    verifyExternalLinksContains(btn, link) {
        return cy.get(header_link_locators).each(($el) => {
            if ($el.text().toLocaleLowerCase() === btn.toLocaleLowerCase()) {
                // wrap this element so we can use cypress commands on it
                // verify href and target attribute
                cy.wrap($el)
                    .should('have.attr', 'href', link)
                    .and('have.attr', 'target', '_blank')
            }
        })
    },

    verifyExternalLinkNavigated(btn, pagespecifics) {
        return cy.get(header_link_locators).each(($el) => {

            if ($el.text().toLocaleLowerCase() === btn.toLocaleLowerCase()) {
                cy.wrap($el).then(($href) => {
                    //take href property
                    const href = $href.prop('href')
                    //request page with href
                    cy.request(href).its('body')
                        .should('include', pagespecifics)
                })
            }
        })

    }

}