/// <reference types="Cypress" />

describe('Alert Testing', function()
	{
	it('Simple Alert',function(){
		cy.visit("https://mail.rediff.com/cgi-bin/login.cgi") //visit URL
	
		cy.get('.signinbtn').click()
		cy.on('window: alert', (str) => 
		{
			expect(str).to.equal('Please enter a valid user name')
		}
		)
	}
	)
	
	it('Confirmation Alerts',function(){
		cy.visit("https://testautomationpractice.blogspot.com") //visit URL
	
		cy.get('#HTML9 > div:nth-child(2) > button:nth-child(1)').click()
		cy.on('window: confirm', (str) => 
		{
			expect(str).to.equal('Press a button!')
		}
		)
	}
	)
}
)