class WindowPopupModalPage {

    /**
    * Method to check if the WindowPopupModalPage is visible
    */
    isReady(){
        cy.url().should('eq', 'https://www.seleniumeasy.com/test/window-popup-modal-demo.html');
        cy.get('h2').contains('Window popup Modal Example for Automation').should('be.visible');
    }


  }
  
  export default WindowPopupModalPage;