class DynamicDataLoadingPage {
  /**
   * Method to check if the DynamicDataLoadingPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/dynamic-data-loading-demo.html'
    )
    cy.get('h3').contains('Loading the data Dynamically').should('be.visible')
  }
}

export default DynamicDataLoadingPage
