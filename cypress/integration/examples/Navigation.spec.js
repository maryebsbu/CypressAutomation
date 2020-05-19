/// <reference types="Cypress" />

describe('Navigation', function()
	{
	it('Navigations test',function(){
		cy.visit("https://demo.nopcommerce.com/") //visit URL
		cy.title().should('eq','nopCommerce demo store')
		
		cy.get('.ico-register').contains('Reg').click()
		cy.title().should('eq','nopCommerce demo store. Register')
		
		cy.go('back')
		cy.title().should('eq','nopCommerce demo store')

		cy.go('forward')
		cy.title().should('eq','nopCommerce demo store. Register')

		cy.go(-1) //back
		cy.title().should('eq','nopCommerce demo store')

		cy.go(1) //forward
		cy.title().should('eq','nopCommerce demo store. Register')

		cy.reload
	}
	)
	
}
)
