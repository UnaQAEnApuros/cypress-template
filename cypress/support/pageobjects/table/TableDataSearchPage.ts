class TableDataSearchPage {
  /**
   * Method to check if the TableDataSearchPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://www.seleniumeasy.com/test/table-search-filter-demo.html'
    )
    cy.get('h2')
      .contains(
        'Type in your search to filter data by Tasks / Assignee / Status '
      )
      .should('be.visible')
  }
}

export default TableDataSearchPage
