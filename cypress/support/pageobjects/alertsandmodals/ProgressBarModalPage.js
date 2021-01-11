class ProgressBarModalPage {

    /**
    * Method to check if the ProgressBarModalPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default ProgressBarModalPage;