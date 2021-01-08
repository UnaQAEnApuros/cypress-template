class BootstrapDatePickerPage {

    /**
    * Method to check if the BootstrapDatePickerPage is visible
    */
    isReady(){
        cy.url().should('eq', 'https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html');
        cy.get('h1').contains('Bootstrap Date Pickers Example').should('be.visible');
    }


  }
  
  export default BootstrapDatePickerPage;