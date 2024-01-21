require('cypress-xpath');

describe('Testler ', () => {
  it('visit page', () => {
    cy.visit('/')
  })
  it('Reload', () => {
    //NAVİGATİON
    cy.visit('/')  //sayfayı ziyaret etme
    cy.wait(5000) //bekleme komutu     1sn:1000
    cy.reload()  //sayfayı yeniden yükleme
    cy.wait(5000)
    cy.reload(true) //sayfanın cache tutmadan yeniden yüklenmesi 
    
  })
  it('Go Back and Go forward', () => {
    cy.visit('/')
    cy.wait(5000)
    cy.go('back')   //sayfada geri gitme 
    cy.wait(5000)
    cy.go('forward')   // sayfada ileri gitme
  })
// QUERYING
  it('Get using css selector', () => {
    cy.visit('/')
    cy.wait(4000)
    //cy.get("[type='text']")     // css olarak yol verme 
    cy.xpath('//input[@name="search"]')    //xpath olarak yol verme
  })

  it('Get using xpath selector', () => {
    cy.visit('/')
    cy.xpath("//button[@aria-label='Open cart']")
  })

  it('Get for attribute', () => {
    cy.visit('/')
    cy.get("[type='Text']")         
      .invoke('attr','placeholder')     //çağırma yapıyor
      .should('equal','Search for products...')  //eşitlik kontrolü yapıyor

    
  })

  it('Contains', () => {
    cy.visit('/')
    cy.wait(3000)
    cy.contains('Stickers')
   
  })
it('Click', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.xpath("//span[text()='USD']").eq(0).click()
    cy.wait(3000)

  })
  it('Type', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.xpath("//input[@placeholder='Search for products...']").type('Acme Drawstring Bag')   //deger girme
    cy.xpath("//input[@placeholder='Search for products...']").should('have.value','Acme Drawstring Bag')  //kontrol
    cy.xpath("//input[@placeholder='Search for products...']").type('{enter}')
    cy.wait(3000)
  })

  it('Add products', () => {
    cy.visit('/')
    cy.xpath("//span[text()='USD']").eq(0).click()
    cy.wait(1000)
    cy.get('[title="Color Black"]').click()
    cy.wait(1000)  
    cy.get('[title="Size S"]').click()
    cy.wait(1000)
    cy.get('[aria-label="Add to cart"]').click()
    cy.wait(1000)
   // cy.xpath('//a[text()="Proceed to Checkout"]').click()
    cy.xpath('//button[@aria-label="Close cart"]').click()
    cy.wait(1000)
    cy.xpath('//div[text()="1"]')
    
  })
   
  it.only('Add products', () => {
    cy.visit('/')
    cy.xpath("//a[text()='Stickers']").click()
    cy.url().should('eq','https://demo.vercel.store/search/stickers')
    cy.location().should((location)=>{
         expect(location.href).to.eq('https://demo.vercel.store/search/stickers')
         expect(location.pathname).to.eq('/search/stickers')
         expect(location.protocol).to.eq('https:')
   })
    
    
  })
  
})
