class DragAndDropSlidersPage {
  /**
   * Method to check if the DragAndDropSlidersPage. is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://www.seleniumeasy.com/test/drag-drop-range-sliders-demo.html'
    )
    cy.get('h2').contains('Range Sliders').should('be.visible')
  }
}

export default DragAndDropSlidersPage
