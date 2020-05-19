/// <reference types="Cypress" />

describe('Hooks', () => {
  before(() => {
    // runs once before all tests in the block
	  cy.log('Setup block')
  })

  after(() => {
    // runs once after all tests in the block
	  cy.log('Tear Down block')
  })

  beforeEach(() => {
    // runs before each test in the block
	  cy.log('Login block')
  })

  afterEach(() => {
    // runs after each test in the block
	  cy.log('Logout block')
  })
  
  it('searching', ()=> {
	  cy.log('Searching test')
  })
  
  it('advanced searching', ()=> {
	  cy.log('Advance Searching test')
  })
  
  it('listing products', ()=> {
	  cy.log('Listing producrs test')
  })
})