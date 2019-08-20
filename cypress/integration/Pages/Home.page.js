const home_page_locator = '#header'

export const home = {

    homePage() {
        return cy.get(home_page_locator)
    }
}