class SimpleFormDemoElements {
  /**
   * Method to get the user message input element
   */
  getUserMessageInput() {
    return cy.get('.form-group > #user-message')
  }

  /**
   * Method to get the show message button
   */
  getShowMessageButton() {
    return cy.get('#get-input > .btn').contains('Show Message')
  }

  /**
   * Method to get the show message text
   */
  getYourMessageText() {
    return cy.xpath("//span[@id='display']")
  }

  /**
   * Method to get the input 1 element
   */
  getInput1Sum() {
    return cy.get('#sum1')
  }

  /**
   * Method to get the input 2 element
   */
  getInput2Sum() {
    return cy.get('#sum2')
  }

  /**
   * Method to get the total button
   */
  getTotalButton() {
    return cy.get('#gettotal > .btn').contains('Get Total')
  }

  /**
   * Method to get the total result text
   */
  getTotalResult() {
    return cy.xpath("//span[@id='displayvalue']")
  }
}

export default SimpleFormDemoElements
