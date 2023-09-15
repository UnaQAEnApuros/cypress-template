class CheckboxDemoPage {
  checkBox: any;

  constructor() {}

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
    cy.get('#isAgeSelected').click();
  }

  /**
   * Method to check the first checkbox message
   */
  checkFirstCheckboxMessage() {
    cy.get('#txtAge').contains('Success - Check box is checked');
  }

  /**
   * Method to click on select all button
   */
  clickOnSelectAllButton() {
    cy.get('#check1').click();
  }

  /**
   * Method to check that all the checks are not selected
   */
  checkAllButtonsAreNotSelected() {
    cy.xpath("//input[@id='isChkd']").should('have.value', 'false');
  }

  /**
   * Method to check that all the checks are selected
   */
  checkAllButtonsAreSelected() {
    cy.xpath("//input[@id='isChkd']").should('have.value', 'true');
  }
}

export default CheckboxDemoPage;
