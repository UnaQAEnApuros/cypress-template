class SelectDropdownListPage {
  /**
   * Method to check if the SelectDropdownListPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html'
    )
    cy.get('h3')
      .contains(
        'This would be your first example on select dropd down list to with Selenium.'
      )
      .should('be.visible')
  }
}

export default SelectDropdownListPage
