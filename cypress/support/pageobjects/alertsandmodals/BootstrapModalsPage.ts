class BootstrapModalsPage {
  /**
   * Method to check if the BootstrapModalsPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/bootstrap-modal-demo.html'
    )
    cy.get('h2')
      .contains('Bootstrap Modal Example for Automation')
      .should('be.visible')
  }
}

export default BootstrapModalsPage
