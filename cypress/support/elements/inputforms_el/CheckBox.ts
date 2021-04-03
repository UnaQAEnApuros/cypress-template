class Checkbox {
  /**
   * Method to get the Cross Browser Testing Logo
   */
  getUserMessageInput() {
    return cy.get('.form-group > #user-message')
  }
}

export default Checkbox
