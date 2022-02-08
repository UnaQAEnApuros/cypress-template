class AjaxFormSubmitPage {
  /**
   * Method to check if the AjaxFormSubmitPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/ajax-form-submit-demo.html'
    )
    cy.get('h1')
      .contains('Ajax Form Submit with Loading icon')
      .should('be.visible')
  }
}

export default AjaxFormSubmitPage
