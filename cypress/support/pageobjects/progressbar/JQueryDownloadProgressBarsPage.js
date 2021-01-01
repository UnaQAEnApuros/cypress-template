class JQueryDownloadProgressBarsPage {

    /**
    * Method to check if the JQueryDownloadProgressBarsPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default JQueryDownloadProgressBarsPage;