class SelectDropdownListPage {
  /**
   * Method to check if the SelectDropdownListPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/basic-select-dropdown-demo.html'
    )
    cy.get('h3')
      .contains(
        'This would be your first example on select dropd down list to with Selenium.'
      )
      .should('be.visible')
  }
}

export default SelectDropdownListPage
