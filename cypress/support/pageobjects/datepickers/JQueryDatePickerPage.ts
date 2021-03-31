class JQueryDatePickerPage {
  /**
   * Method to check if the JQueryDatePickerPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://www.seleniumeasy.com/test/jquery-date-picker-demo.html'
    )
    cy.get('h2').contains('JQuery Date Picker Demo').should('be.visible')
  }
}

export default JQueryDatePickerPage
