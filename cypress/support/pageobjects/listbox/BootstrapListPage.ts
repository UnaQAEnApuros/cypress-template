class BootstrapListPage {
  /**
   * Method to check if the BootstrapListPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/bootstrap-dual-list-box-demo.html'
    )
    cy.get('h3').contains('Dual List Box Example').should('be.visible')
  }
}

export default BootstrapListPage
