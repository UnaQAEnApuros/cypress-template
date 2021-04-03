import Checkbox from '../../elements/inputforms_el/Checkbox'

class CheckboxDemoPage {
  checkBox: any

  constructor() {
    this.checkBox = new Checkbox()
  }

  /**
   * Method to check if the CheckboxDemoPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://www.seleniumeasy.com/test/basic-checkbox-demo.html'
    )
    cy.get('h3')
      .contains(
        'This would be a basic example to start with checkboxes using selenium.'
      )
      .should('be.visible')
  }

  clickOnFirstCheckbox() {
    this.checkBox.getFirstCheckbox().click()
  }

  checkFirstCheckboxMessage() {
    this.checkBox
      .getFirstSucessMessage()
      .contains('Success - Check box is checked')
  }
}

export default CheckboxDemoPage
