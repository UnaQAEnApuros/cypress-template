class JQueryDownloadProgressBarsPage {
  /**
   * Method to check if the JQueryDownloadProgressBarsPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/jquery-download-progress-bar-demo.html'
    )
    cy.get('h2')
      .contains('JQuery UI Progress bar - Download Dialog')
      .should('be.visible')
  }
}

export default JQueryDownloadProgressBarsPage
