class Methods{

  visit(url="/"){
    cy.visit(url)
  }
  findElement(locator){
    if(locator.startsWith('/')){
        return cy.xpath(locator)
    }else{
        return cy.get(locator)
    }
    
    }
    clickButton(locator,afterWait=0){
        return this.findElement(locator).click({force:true}).wait(afterWait)
     } 
     

}
export default new Methods();