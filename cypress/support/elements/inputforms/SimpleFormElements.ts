class SimpleFormElements {
  /**
   * Method to get the Cross Browser Testing Logo
   */
  getUserMessageInput() {
    return cy.get('.form-group > #user-message')
  }

  getShowMessageButton() {
    return cy.get('#get-input > .btn').contains('Show Message')
  }

  getYourMessageText() {
    return cy.xpath("//span[@id='display']")
  }

  getInput1Sum() {
    return cy.get('#sum1')
  }

  getInput2Sum() {
    return cy.get('#sum2')
  }

  getTotalButton() {
    return cy.get('#gettotal > .btn').contains('Get Total')
  }

  getTotalResult() {
    return cy.xpath("//span[@id='displayvalue']")
  }
}

export default SimpleFormElements
