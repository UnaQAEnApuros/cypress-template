import Checkbox from '../../elements/inputforms_el/CheckBox'

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

  /**
   * Method to click on the first checkbox button
   */
  clickOnFirstCheckbox() {
    this.checkBox.getFirstCheckbox().click()
  }

  /**
   * Method to check the first checkbox message
   */
  checkFirstCheckboxMessage() {
    this.checkBox
      .getFirstSucessMessage()
      .contains('Success - Check box is checked')
  }

  /**
   * Method to click on select all button
   */
  clickOnSelectAllButton() {
    this.checkBox.getClickAllButton().click()
  }

  /**
   * Method to check that all the checks are not selected
   */
  checkAllButtonsAreNotSelected() {
    this.checkBox.getInputChecked().should('have.value', 'false')
  }

  /**
   * Method to check that all the checks are selected
   */
  checkAllButtonsAreSelected() {
    this.checkBox.getInputChecked().should('have.value', 'true')
  }
}

export default CheckboxDemoPage
