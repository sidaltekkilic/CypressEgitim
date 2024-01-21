require('cypress-xpath');
import dashboardLocators from "../fixtures/dashboardLocators";
import Methods from '../pages/Methods';
describe('Dashboard ', () => {

  Cypress.on('uncaught:exception', () => { return false })
  
  it('shirts category', () => {
    Methods.visit('https://demo.vercel.store/')
    Methods.clickButton(dashboardLocarts.shirtsLinkText)
    
  })
  it('stickers category', () => {
    Methods.visit('https://demo.vercel.store/')
    Methods.clickButton(dashboardLocators.stickersLinkTest,5000)
    
  })
  it('search product', () => {
    Methods.visit('https://demo.vercel.store/')
    Methods.clickButton(dashboardLocators.searchProductInputText,'Acme Circles T-Shirt')
    
  })
  
  it('verify dashboard page', () => {
    Methods.visit('https://demo.vercel.store/')
    cy.contains('Stickers')
    cy.contains('All')
    cy.contains('Shirts')
  })
})

