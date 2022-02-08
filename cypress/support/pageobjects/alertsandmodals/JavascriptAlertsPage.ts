class JavascriptAlertsPage {
  /**
   * Method to check if the JavascriptAlertsPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/javascript-alert-box-demo.html'
    )
    cy.get('h3')
      .contains(
        'JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.'
      )
      .should('be.visible')
  }
}

export default JavascriptAlertsPage
