class CheckboxElements {
  /**
   * Method to get the first checkbox
   */
  getFirstCheckbox() {
    return cy.get('#isAgeSelected')
  }

  /**
   * Method to get the first success message
   */
  getFirstSuccessMessage() {
    return cy.get('#txtAge')
  }

  /**
   * Method to get the checkbox option 1
   */
  getCheckboxOption1() {
    return cy.get(':nth-child(3) > label').contains('Option 1')
  }

  /**
   * Method to get the checkbox option 2
   */
  getCheckboxOption2() {
    return cy.get(':nth-child(4) > label').contains('Option 2')
  }

  /**
   * Method to get the checkbox option 3
   */
  getCheckboxOption3() {
    return cy.get(':nth-child(5) > label').contains('Option 3')
  }

  /**
   * Method to get the checkbox option 4
   */
  getCheckboxOption4() {
    return cy.get(':nth-child(6) > label').contains('Option 4')
  }

  /**
   * Method to get the all button
   */
  getClickAllButton() {
    return cy.get('#check1')
  }

  /**
   * Method to get the input checked property
   */
  getInputChecked() {
    return cy.xpath("//input[@id='isChkd']")
  }
}

export default CheckboxElements
