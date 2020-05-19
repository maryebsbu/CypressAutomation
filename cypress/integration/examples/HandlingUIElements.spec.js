/// <reference types="Cypress" />

describe('UI Elemnets', function()
		{
	it('Verify Inputbox and Radio buttons',function(){
		cy.visit("http://newtours.demoaut.com/") //visit URL
		cy.url().should('include','newtours') //verify URL should include '...' 
		cy.get('[name=userName]').should('be.visible').should('be.enabled').type('mercury')
		cy.get('[name=password]').should('be.visible').should('be.enabled').type('mercury')
		cy.get('[name=login]').should('be.visible').click()  //sign in
		
		//Title verification
		cy.title().should('eq','Find a Flight: Mercury Tours:')
		
		//Radio buttons
		cy.get('input[value=roundtrip]').should('be.visible').should('be.checked') //visibility and checked status
		cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click() //visibility and checked status
		
		cy.get('[name=findFlights]').should('be.visible').click() //continue button
		
		cy.title().should('eq','Select a Flight: Mercury Tours')



	})	
})