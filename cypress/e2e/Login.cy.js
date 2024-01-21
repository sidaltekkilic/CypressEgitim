describe('Saklama Login', () => {
  it('Login', () => {
    //Cypress.on('uncaught:exception', () => { return false })
    cy.visit('https://bubisanat.com/sign_in')
   // cy.wait(3000)
    cy.get('[id="user_login"]').type("Sidal")
    //cy.wait(3000)
    cy.get('[id="user_password"]').type("Ozgr2010")
   // cy.wait(3000)
    cy.get('[value="Giriş Yap"]').click()
   // cy.wait(2000)
   //cy.get('[id="OKButton"]').click()
  })
})