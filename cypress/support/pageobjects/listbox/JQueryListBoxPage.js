class JQueryListBoxPage {

    /**
    * Method to check if the JQueryListBoxPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default JQueryListBoxPage;