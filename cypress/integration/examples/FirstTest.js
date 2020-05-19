describe('MyTestSuite', () => {
  it('Verify title of the google', () => {
    cy.visit('https://google.com')
    cy.title().should('eq','Google')
  })
  it('Verify title of facebook', () => {
    cy.visit('https://facebook.com')
    cy.title().should('eq','Facebook – Anmelden oder Registrieren')
  })
})
