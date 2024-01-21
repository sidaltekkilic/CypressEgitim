require('cypress-xpath');

describe('Testler ', () => {
  it('visit page', () => {
    cy.visit('/')
  })

  it('Reload', () => {
    cy.visit('/')  
    cy.xpath("//input[@placeholder='Search for products...']").type('Acme Drawstring Bag')   //deger girme
    cy.xpath("//input[@placeholder='Search for products...']").should('have.value','Acme Drawstring Bag')  //kontrol
    cy.xpath("//input[@placeholder='Search for products...']").type('{enter}')
  })
})