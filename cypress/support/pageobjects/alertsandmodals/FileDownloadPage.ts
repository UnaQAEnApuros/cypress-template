class FileDownloadPage {
  /**
   * Method to check if the FileDownloadPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/generate-file-to-download-demo.html'
    )
    cy.get('h2')
      .contains('File Download Demo for Automation')
      .should('be.visible')
  }
}

export default FileDownloadPage
