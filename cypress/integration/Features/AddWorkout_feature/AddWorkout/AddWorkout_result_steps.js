/// <reference types="Cypress" />
import { Then, And } from "cypress-cucumber-preprocessor/steps"
import { addWorkout } from "../../../Pages/AddWorkout.page"

const todaysDate = Cypress.moment().format('DD/MM/YYYY')

Then('intensity zone persentage is', datatable => {
    datatable.hashes().forEach(row => {
        addWorkout.validateZonesPercentage(row.zone1, row.zone2, row.zone3)
    })
})

Then('add parameters {string}, {string}, {string}, {string} will be shown', (parameter1, parameter2, parameter3, parameter4) => {
    addWorkout.validateAddParameters(parameter1, parameter2, parameter3, parameter4)
})

Then('adding new sport form is visible with additional fields', datatable => {
    datatable.hashes().forEach(row => {
        addWorkout.validateAddSportForm(row.label).should('have.length.greaterThan', 1)
    })
})

Then('adding new sport form is not visible', () => {
    addWorkout.validateAddSportForm('Activity').should('have.length', 1)
    addWorkout.validateAddSportForm('Duration').should('have.length', 1)
    addWorkout.validateAddSportForm('Distance').should('have.length', 1)
    addWorkout.validateAddSportForm('Intensity').should('have.length', 1)
    addWorkout.validateAddSportForm('Time in zone').should('have.length', 1)
    addWorkout.validateAddSportForm('Add parameter').should('have.length', 1)
})

Then('Date field should have todays date', () => {
    addWorkout.getDate().should(($date) => {
        expect($date).to.be.equal(todaysDate)
    })
})

Then('Time field should have todays time', () => {
    const currentTime = Cypress.moment().format('H : mm')
    addWorkout.getTime().should(($time) => {
        expect($time).to.be.equal(currentTime)
    })
})

And('input fields are visible', datatable => {
    datatable.hashes().forEach(row => {
        addWorkout.getInputElements(row.fields).should('be.visible')
    })
})

And('Mode dropdown is not accesible', () => {
    addWorkout.modeDropdown().should('have.class', 'greyed-out')
})

Then('Mode dropdown is accesible', () => {
    addWorkout.modeDropdown().should('not.have.class', 'greyed-out')
})


Then ('user is navigated to {string} page', (link)=>{
    cy.url().should('contain', link)
})