class TableDataDownloadPage {
  /**
   * Method to check if the TableDataDownloadPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/table-data-download-demo.html'
    )
    cy.get('h2')
      .contains(' Data Table with Download / Print Demo')
      .should('be.visible')
  }
}

export default TableDataDownloadPage
