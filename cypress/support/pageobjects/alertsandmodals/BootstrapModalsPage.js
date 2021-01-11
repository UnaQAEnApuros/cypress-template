class BootstrapModalsPage {

    /**
    * Method to check if the BootstrapModalsPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default BootstrapModalsPage;