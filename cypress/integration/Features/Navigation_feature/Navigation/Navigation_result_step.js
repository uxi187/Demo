import { Then, And } from "cypress-cucumber-preprocessor/steps";
import { header } from "../../../Pages/Header.page"
import { footer } from "../../../Pages/Footer.page"

Then('external link {string} with {string} is open from header', (btn, redirectedPageUrl) => {
    header.verifyExternalLinkNavigated(btn, redirectedPageUrl)
})


Then('external link {string} with {string} is open from footer', (btn, redirectedPageUrl) => {
    footer.verifyExternalLinkNavigated(btn, redirectedPageUrl)
})

Then('external link {string} is open', (link) => {
    footer.verifyFooterLogoNavigated(link)
})


Then('navigating to link redirect user to page', datatable => {
    datatable.hashes().forEach(row => {

        switch (row.button.toLocaleLowerCase()) {
            case "client name":
                header.clientName()
                    .should('be.visible')
                    .click()
                break;
            case "coach":
                header.coach()
                    .should('be.visible')
                    .click()
                break;
            case "add a workout":
                header.addWorkaut()
                    .should('be.visible')
                    .click()
                break;
            case "trainsmart logo":
                header.trainsmartLogo()
                    .should('be.visible')
                    .click()
                break;
            case "my training":
                header.myTraining()
                    .should('be.visible')
                    .click()
                break;
            case "my goals":
                header.myGoals()
                    .should('be.visible')
                    .click()
                break;
            case "my profile":
                header.myProfile()
                    .should('be.visible')
                    .click()
                break;
            case "physical details":
                header.physicalDetail()
                    .should('be.visible')
                    .click()
                break;
            case "messages":
                header.messages()
                    .should('be.visible')
                    .click()
                break;
            case "contacts":
                header.contacts()
                    .should('be.visible')
                    .click()
                break;
            case "settings":
                header.settings()
                    .should('be.visible')
                    .click()
                break;
            case "home":
                header.home()
                    .should('be.visible')
                    .click()
                break;
            case "logout":
                header.logOut()
                    .should('be.visible')
                    .click()
                break;
        }

        cy.url({timeout:8000}).should('include', row.link);
    });

})