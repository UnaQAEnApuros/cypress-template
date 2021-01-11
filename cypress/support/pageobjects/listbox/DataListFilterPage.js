class DataListFilterPage {

    /**
    * Method to check if the DataListFilterPage is visible
    */
    isReady(){
        cy.url().should('eq', 'https://www.seleniumeasy.com/test/data-list-filter-demo.html');
        cy.get('h2').contains('Data List Filter ').should('be.visible');
    }


  }
  
  export default DataListFilterPage;