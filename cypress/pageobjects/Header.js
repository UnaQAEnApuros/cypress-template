class Header {
    getSeleniumEasyLogo() {
      return cy.get('.logo > a > img');
    }
  }
  
  export default Header;