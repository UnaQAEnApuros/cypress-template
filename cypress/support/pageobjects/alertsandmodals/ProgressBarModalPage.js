class ProgressBarModalPage {

    /**
    * Method to check if the ProgressBarModalPage is visible
    */
    isReady(){
        cy.url().should('eq', 'https://www.seleniumeasy.com/test/bootstrap-progress-bar-dialog-demo.html');
        cy.get('h2').contains('Modal dialog with progress bar').should('be.visible');
    }


  }
  
  export default ProgressBarModalPage;