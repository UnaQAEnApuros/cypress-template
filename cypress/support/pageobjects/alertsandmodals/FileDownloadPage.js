class FileDownloadPage {

    /**
    * Method to check if the FileDownloadPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default FileDownloadPage;