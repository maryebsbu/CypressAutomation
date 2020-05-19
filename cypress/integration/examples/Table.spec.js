/// <reference types="Cypress" />

describe('Table Test Suite', function()
		{
	it('Table Test',function(){
		cy.visit("http://testautomationpractice.blogspot.com/") //visit URL
		
		//1. Check value presence anywhere in the table
		cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')
		
		//2. Check value presence in specific row & column
		cy.get('table[name=BookTable] > tbody> tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')
		
		//verify the book name "Master In Java" whose author is Amod
		
	/*	cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(function($e, index,$list){
		{
		const text = $e.text()
		if($e.text().include("Amode"))
{		{
			cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bname){
			
			const bookname= bname.text()
			expect(bookname).to.equal("Mastre In Java")
		}
			)		
				}
}		}		
				}) */	
	})
})