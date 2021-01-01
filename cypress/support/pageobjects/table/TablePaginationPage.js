class TablePaginationPage {

    /**
    * Method to check if the TablePaginationPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default TablePaginationPage;