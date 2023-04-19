class SimpleFormElements {
  /**
   * Method to get the user message input
   */
  getUserMessageInput() {
    return cy.get('.form-group > #user-message');
  }

  /**
   * Method to get the show message button.
   */
  getShowMessageButton() {
    return cy.get('#get-input > .btn').contains('Show Message');
  }

  /**
   * Method to get your message text.
   */
  getYourMessageText() {
    return cy.xpath("//span[@id='display']");
  }

  /**
   * Method to get the input 1
   */
  getInput1Sum() {
    return cy.get('#value1');
  }

  /**
   * Method to get the input 2
   */
  getInput2Sum() {
    return cy.get('#value2');
  }

  /**
   * Method to get the total button
   */
  getTotalButton() {
    return cy.get('#gettotal > .btn').contains('Get Total');
  }

  /**
   * Method to get the total results text
   */
  getTotalResult() {
    return cy.xpath("//span[@id='displayvalue']");
  }
}

export default SimpleFormElements;
