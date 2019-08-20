beforeEach(() => {
  cy.visit('/#/login', {
    onBeforeLoad(win) {
      cy.stub(win, 'open').as('windowOpen')
    }
  })
})