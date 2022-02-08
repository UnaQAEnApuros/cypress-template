class RadioButtonsDemoPage {
  /**
   * Method to check if the RadioButtonsDemoPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/basic-radiobutton-demo.html'
    )
    cy.get('h3')
      .contains(
        'This is again simple example to start working with radio buttons using Selenium.'
      )
      .should('be.visible')
  }
}

export default RadioButtonsDemoPage
