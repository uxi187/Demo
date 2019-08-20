const footer_link_locators = '#footer .footer-links a'
const footer_logo_locators = '#footer a.footer-logo'


export const footer = {

    verifyExternalLinksContains(btn, link) {
        return cy.get(footer_link_locators).each(($el) => {
            if ($el.text().toLocaleLowerCase() == btn.toLocaleLowerCase()) {
                // wrap this element so we can use cypress commands on it
                // verify href and target attribute
                return cy.wrap($el)
                    .should('have.attr', 'href', link)
                    .and('have.attr', 'target', '_blank')
            }
        })
    },

    verifyFooterLogoContains(link) {
        return cy.get(footer_logo_locators)
            .should('have.attr', 'href', link)
            .and('have.attr', 'target', '_blank')
    },

    verifyFooterLogoNavigated(link) {
        return cy.get(footer_logo_locators)
            .then(($href) => {
                //take href property
                const href = $href.prop('href')
                //request page with href
                cy.request(href).its('body')
                    .should('include', link)
            })
    },

    verifyExternalLinkNavigated(btn, pagespecifics) {
        return cy.get(footer_link_locators).each(($el) => {

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