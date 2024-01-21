describe('Saklama Login', () => {
  it('Login', () => {
   
    cy.visit('https://www.saucedemo.com/')
   // cy.wait(3000)
    cy.get('[id="user-name"]').type("Sidal")
    //cy.wait(3000)
    cy.get('[id="password"]').type("Ozgr2010")
   // cy.wait(3000)
    cy.get('[id="login-button"]').click()
   // cy.wait(2000)
   //cy.get('[id="OKButton"]').click()
  })
})