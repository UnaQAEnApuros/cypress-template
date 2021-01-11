class DynamicDataLoadingPage {

    /**
    * Method to check if the DynamicDataLoadingPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default DynamicDataLoadingPage;