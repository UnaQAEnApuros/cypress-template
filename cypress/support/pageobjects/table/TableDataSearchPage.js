class TableDataSearchPage {

    /**
    * Method to check if the TableDataSearchPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default TableDataSearchPage;