class CheckboxDemoPage {

    /**
    * Method to check if the CheckboxDemoPage is visible
    */
    isReady(){
        cy.url().should('eq', 'https://www.seleniumeasy.com/test/basic-checkbox-demo.html');
        cy.get('h3').contains('This would be a basic example to start with checkboxes using selenium.').should('be.visible');
    }


  }
  
  export default CheckboxDemoPage;