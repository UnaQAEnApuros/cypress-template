class ChartsDemoDropdownPage {
  /**
   * Method to check if the ChartsDemoDropdownPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/charts-mouse-hover-demo.html'
    )
  }
}

export default ChartsDemoDropdownPage
