class WindowPopupModalPage {

    /**
    * Method to check if the WindowPopupModalPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default WindowPopupModalPage;