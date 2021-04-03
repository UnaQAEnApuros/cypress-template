class Checkbox {
  /**
   * Method to get
   */
  getFirstCheckbox() {
    return cy.get('#isAgeSelected')
  }

  getFirstSucessMessage() {
    return cy.get('#txtAge')
  }

  getCheckboxOption1() {
    return cy.get(':nth-child(3) > label').contains('Option 1')
  }

  getCheckboxOption2() {
    return cy.get(':nth-child(4) > label').contains('Option 2')
  }

  getCheckboxOption3() {
    return cy.get(':nth-child(5) > label').contains('Option 3')
  }

  getCheckboxOption4() {
    return cy.get(':nth-child(6) > label').contains('Option 4')
  }

  getClickAllButton() {
    return cy.get('#check1')
  }

  getInpitChecked() {
    return cy.xpath("//input[@id='isChkd']")
  }
}

export default Checkbox
