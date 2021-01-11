class DragAndDropPage {

    /**
    * Method to check if the DragAndDropPage is visible
    */
    isReady(){
        cy.url().should('eq', '');
        cy.get('h1').contains('').should('be.visible');
    }


  }
  
  export default DragAndDropPage;