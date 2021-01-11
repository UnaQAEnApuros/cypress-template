class BootstrapListPage {

    /**
    * Method to check if the BootstrapListPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default BootstrapListPage;