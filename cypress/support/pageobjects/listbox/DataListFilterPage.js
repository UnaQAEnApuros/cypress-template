class DataListFilterPage {

    /**
    * Method to check if the DataListFilterPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default DataListFilterPage;