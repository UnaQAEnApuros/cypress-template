class DragAndDropPage {

    /**
    * Method to check if the DragAndDropPage is visible
    */
    isReady(){
        cy.url().should('eq', 'https://www.seleniumeasy.com/test/drag-and-drop-demo.html');
        cy.get('h2').contains('Drag and Drop Demo for Automation').should('be.visible');
    }


  }
  
  export default DragAndDropPage;