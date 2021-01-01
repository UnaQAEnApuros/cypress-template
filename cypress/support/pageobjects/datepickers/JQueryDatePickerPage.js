class JQueryDatePickerPage {

    /**
    * Method to check if the JQueryDatePickerPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default JQueryDatePickerPage;