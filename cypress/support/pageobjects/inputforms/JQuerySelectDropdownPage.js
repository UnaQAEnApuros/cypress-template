class JQuerySelectDropdownPage {

    /**
    * Method to check if the JQuerySelectDropdownPage is visible
    */
    isReady(){
        cy.url().should('eq', 'https://www.seleniumeasy.com/test/jquery-dropdown-search-demo.html');
        cy.get('h2').contains('Single Select - Search and Select country').should('be.visible');
    }


  }
  
  export default JQuerySelectDropdownPage;