class JavascriptAlertsPage {

    /**
    * Method to check if the JavascriptAlertsPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default JavascriptAlertsPage;