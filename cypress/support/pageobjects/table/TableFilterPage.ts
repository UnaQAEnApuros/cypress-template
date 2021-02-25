class TableFilterPage {

    /**
    * Method to check if the TableFilterPage is visible
    */
    isReady(){
        cy.url().should('eq', 'https://www.seleniumeasy.com/test/table-records-filter-demo.html');
        cy.get('h2').contains('Table Filter Demo').should('be.visible');
    }


  }
  
  export default TableFilterPage;