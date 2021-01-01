class TableSortAndSearchPage {

    /**
    * Method to check if the TableSortAndSearchPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default TableSortAndSearchPage;