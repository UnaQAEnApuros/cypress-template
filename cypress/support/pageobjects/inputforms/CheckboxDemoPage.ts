import CheckboxElements from '../../elements/inputforms/CheckBoxElements';

class CheckboxDemoPage {
  checkBox: any;

  constructor() {
    this.checkBox = new CheckboxElements();
  }

  /**
   * Method to check if the CheckboxDemoPage is visible
   */
  isReady() {
    cy.url().should('eq', 'https://demo.seleniumeasy.com/basic-checkbox-demo.html');
    cy.get('h3').contains('This would be a basic example to start with checkboxes using selenium.').should('be.visible');
  }

  /**
   * Method to click on the first checkbox button
   */
  clickOnFirstCheckbox() {
    this.checkBox.getFirstCheckbox().click();
  }

  /**
   * Method to check the first checkbox message
   */
  checkFirstCheckboxMessage() {
    this.checkBox.getFirstSuccessMessage().contains('Success - Check box is checked');
  }

  /**
   * Method to click on select all button
   */
  clickOnSelectAllButton() {
    this.checkBox.getClickAllButton().click();
  }

  /**
   * Method to check that all the checks are not selected
   */
  checkAllButtonsAreNotSelected() {
    this.checkBox.getInputChecked().should('have.value', 'false');
  }

  /**
   * Method to check that all the checks are selected
   */
  checkAllButtonsAreSelected() {
    this.checkBox.getInputChecked().should('have.value', 'true');
  }
}

export default CheckboxDemoPage;
