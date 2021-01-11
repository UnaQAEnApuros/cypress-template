class ChartsDemoDropdownPage {

    /**
    * Method to check if the ChartsDemoDropdownPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default ChartsDemoDropdownPage;