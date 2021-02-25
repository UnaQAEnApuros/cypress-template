class InputFormSubmitPage {

    /**
    * Method to check if the InputFormSubmitPage is visible
    */
    isReady(){
        cy.url().should('eq', 'https://www.seleniumeasy.com/test/input-form-demo.html');
        cy.get('h2').contains('Input form with validations').should('be.visible');
    }


  }
  
  export default InputFormSubmitPage;