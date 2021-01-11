class BootstrapAlertsPage {

    /**
    * Method to check if the BootstrapAlertsPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default BootstrapAlertsPage;