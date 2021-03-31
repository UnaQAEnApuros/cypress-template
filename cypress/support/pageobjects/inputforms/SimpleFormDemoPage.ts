class SimpleFormDemoPage {
  /**
   * Method to check if the SimpleFormDemoPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://www.seleniumeasy.com/test/basic-first-form-demo.html'
    )
    cy.get('h3')
      .contains('This would be your first example to start with Selenium.')
      .should('be.visible')
  }
}

export default SimpleFormDemoPage
