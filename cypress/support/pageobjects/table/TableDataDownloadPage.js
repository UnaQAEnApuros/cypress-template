class TableDataDownloadPage {

    /**
    * Method to check if the TableDataDownloadPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default TableDataDownloadPage;