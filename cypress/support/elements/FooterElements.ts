class FooterElements {
  /**
   * Method to check if the Footer is visible
   */
  isReady() {
    cy.get('.footer').should('be.visible')
  }
}

export default FooterElements
