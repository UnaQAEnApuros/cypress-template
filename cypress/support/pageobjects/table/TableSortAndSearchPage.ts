class TableSortAndSearchPage {
  /**
   * Method to check if the TableSortAndSearchPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/table-sort-search-demo.html'
    )
    cy.get('h2').contains('Table Sort And Search Demo').should('be.visible')
  }
}

export default TableSortAndSearchPage
