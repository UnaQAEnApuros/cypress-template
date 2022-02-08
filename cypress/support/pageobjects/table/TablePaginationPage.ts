class TablePaginationPage {
  /**
   * Method to check if the TablePaginationPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/table-pagination-demo.html'
    )
    cy.get('h2').contains('Table with Pagination Example').should('be.visible')
  }
}

export default TablePaginationPage
