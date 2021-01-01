class BootstrapDatePickerPage {

    /**
    * Method to check if the BootstrapDatePickerPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default BootstrapDatePickerPage;