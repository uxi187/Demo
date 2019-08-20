
const slider_locator = 'a.d3-slider-handle'
const zone_1_percentage_locator = '.zone.zone-0 .zone-value-label'
const zone_2_percentage_locator = '.zone.zone-1 .zone-value-label'
const zone_3_percentage_locator = '.zone.zone-2 .zone-value-label'
const add_sport_locator = '.action-link'

const DATE = 'Date'
const DURATION = 'Duration'
const DISTANCE = 'Distance'
const ACTIVITY = 'Activity'
const MODE = 'Mode'
const ADDPARAMETER = 'Add parameter'
const TIME = 'Time'
const REMOVESPORT = 'Remove sport'


export const addWorkout = {

    duration() {
        return cy.contains(DURATION).siblings('span.workout-form-input').find('input')
    },

    distance() {
        return cy.contains(DISTANCE).siblings('span.workout-form-input').find('input')
    },

    getInputElements(field) {
        return cy.contains('' + field + '').siblings('span.workout-form-input').find('input')
    },

    moveSlider(x) {
        var a = parseInt(x)
        return cy.get(slider_locator).eq(0).click()
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { clientX: 205, clientY: 87 })
            .trigger('mouseup', { force: true })
    },

    zone1percenatge() {
        return cy.get(zone_1_percentage_locator)
    },

    validateZonesPercentage(zone1, zone2, zone3) {
        cy.get(zone_1_percentage_locator).should(($percentage) => {
            expect($percentage.text().match('[0-9]+')[0]).to.equals(zone1)
        })
        cy.get(zone_2_percentage_locator).should(($percentage) => {
            expect($percentage.text().match('[0-9]+')[0]).to.equals(zone2)
        })
        cy.get(zone_3_percentage_locator).should(($percentage) => {
            expect($percentage.text().match('[0-9]+')[0]).to.equals(zone3)
        })
    },

    modeDropdown() {
        return cy.get('.workout-form-row').find('label*:contains("' + MODE + '")').siblings('span.workout-form-input').find('a')
    },

    selectActivity(activity) {
        cy.contains(ACTIVITY).siblings('span.workout-form-input').find('a').should('be.visible').click()
        cy.contains(ACTIVITY).siblings('span.workout-form-input').find('a').next('ul.dropdown-menu').find('li').should('be.visible').each(($element) => {
            if ($element.text() === activity) {
                cy.wrap($element).click({ force: true })
            }
        })
    },

    getAddParametersOptions(parameter) {
        return cy.contains(ADDPARAMETER).siblings('span.workout-form-input').find('div.toggle-buttons').find('li').then(($li) => {
            expect($li.text()).to.include(parameter)
        })
    },

    validateAddParameters(parameter1, parameter2, parameter3, parameter4) {

        if (parameter1 != "") {
            this.getAddParametersOptions(parameter1)
        }
        if (parameter2 != "") {
            this.getAddParametersOptions(parameter2)
        }
        if (parameter3 != "") {
            this.getAddParametersOptions(parameter3)
        }
        if (parameter4 != "") {
            this.getAddParametersOptions(parameter4)
        }
    },

    addSport() {
        return cy.get(add_sport_locator)
    },

    removeSport() {
        return cy.contains(REMOVESPORT)
    },

    validateAddSportForm(label) {
        return cy.get('.workout-form-row').find('*:contains("' + label + '")')
    },

    getDate() {
        return cy.contains(DATE).siblings('span.workout-form-input').then(($el) => {
            return $el.find('.datepickerValue.hasDatepicker').val()
        })
    },

    getTime() {
        return cy.contains(TIME).siblings('span.workout-form-input').then(($el) => {
            return $el.find('input').val()
        })
    },

    clickOnButton(btn) {
        return cy.contains(btn)
    }
}