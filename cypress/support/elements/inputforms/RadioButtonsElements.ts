class RadioButtonsElements {
  /**
   * Method to get the male option
   */
  getMaleOption() {
    return cy.get(':nth-child(4) > .panel-body > :nth-child(2)')
  }

  /**
   * Method to get the female option
   */
  getFemaleOption() {
    return cy.get(':nth-child(4) > .panel-body > :nth-child(3)')
  }

  /**
   * Method to get the gender value selected
   */
  getCheckGenderValueSelectedButton() {
    return cy.get('#buttoncheck')
  }

  /**
   * Method to get the value result selected
   */
  getGenderValueResult() {
    return cy.get('.radiobutton')
  }

  //TODO: Keep adding the elements and do the logic and the test
}

export default RadioButtonsElements
