class BootstrapAlertsPage {
  /**
   * Method to check if the BootstrapAlertsPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/bootstrap-alert-messages-demo.html'
    )
    cy.get('h2').contains('Bootstrap Alert messages').should('be.visible')
  }
}

export default BootstrapAlertsPage
