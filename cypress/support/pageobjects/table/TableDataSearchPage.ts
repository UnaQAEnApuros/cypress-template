class TableDataSearchPage {
  /**
   * Method to check if the TableDataSearchPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/table-search-filter-demo.html'
    )
    cy.get('h2')
      .contains(
        'Type in your search to filter data by Tasks / Assignee / Status '
      )
      .should('be.visible')
  }
}

export default TableDataSearchPage
