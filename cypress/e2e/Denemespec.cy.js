describe('Deneme', () => {
  it('passes', () => {
    cy.visit('https://autopilot.mynak.net/auth/login')
    cy.get('[id="email"]').type("admin@example.com")
    cy.get('[id="password"]').type("secret")
    cy.get('[type="submit"]').click()


    it.only('Autopilot Login', () => {
      cy.visit('https://autopilot.mynak.net/auth/login')
      cy.xpath("//input[@name='email']").eq(0).type('admin@example.com')
      cy.wait(1000)
      cy.xpath("//input[@name='password']").eq(0).type('secret')
      cy.wait(1000)
      cy.xpath('//button[text()="Login"]').click()
      cy.wait(1000)
      cy.xpath('//span[@class="user-name"]').should('have.text', 'Super Admin')
    })
  })
})