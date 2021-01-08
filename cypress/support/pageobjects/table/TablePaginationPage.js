class TablePaginationPage {

    /**
    * Method to check if the TablePaginationPage is visible
    */
    isReady(){
        cy.url().should('eq', 'https://www.seleniumeasy.com/test/table-sort-search-demo.html');
        cy.get('h2').contains('Table Sort And Search Demo').should('be.visible');
    }


  }
  
  export default TablePaginationPage;