class Header {

    isReady(){
      cy.get('.topper').should('be.visible');
      cy.get('.navbar').should('be.visible');
    }

    getSeleniumEasyLogo() {
      return cy.get('.logo > a > img');
    }
  }
  
  export default Header;