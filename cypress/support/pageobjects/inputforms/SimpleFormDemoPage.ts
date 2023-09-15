class SimpleFormDemoPage {
  simpleForm: any;

  constructor() {}

  /**
   * Method to check if the simpleFormPage is visible
   */
  isReady() {
    cy.url().should('eq', 'https://demo.seleniumeasy.com/basic-first-form-demo.html');
    cy.get('h3').contains('This would be your first example to start with Selenium.').should('be.visible');
  }

  enterMessage(message: string) {
    cy.get('.form-group > #user-message').click().clear().type(message);
  }

  clickOnShowMessage() {
    cy.get('#get-input > .btn').contains('Show Message').click();
  }

  checkYourMessageIsCorrect(message: string) {
    cy.xpath("//span[@id='display']").should('have.text', message);
  }

  enterValueA(a: string) {
    cy.get('#value1').click().clear().type(a);
  }

  enterValueB(b: string) {
    cy.get('#value2').click().clear().type(b);
  }

  clickOnGetTotalutton() {
    cy.get('#gettotal > .btn').contains('Get Total').click();
  }

  checkTotalResultIsCorrect(total: number) {
    cy.xpath("//span[@id='displayvalue']").should('have.text', total);
  }
}

export default SimpleFormDemoPage;
