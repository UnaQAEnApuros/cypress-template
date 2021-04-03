import SimpleForm from '../../elements/inputforms_el/SimpleForm'

class SimpleFormDemoPage {
  simpleForm: any

  constructor() {
    this.simpleForm = new SimpleForm()
  }

  /**
   * Method to check if the simpleFormPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://www.seleniumeasy.com/test/basic-first-form-demo.html'
    )
    cy.get('h3')
      .contains('This would be your first example to start with Selenium.')
      .should('be.visible')
  }

  enterMessage(message: string) {
    this.simpleForm.getUserMessageInput().click().clear().type(message)
  }

  clickOnShowMessage() {
    this.simpleForm.getShowMessageButton().click()
  }

  checkYourMessageIsCorrect(message: string) {
    this.simpleForm.getYourMessageText().should('have.text', message)
  }

  enterValueA(a: number) {
    this.simpleForm.getInput1Sum().click().clear().type(a)
  }

  enterValueB(b: number) {
    this.simpleForm.getInput2Sum().click().clear().type(b)
  }

  clickOnGetTotalutton() {
    this.simpleForm.getTotalButton().click()
  }

  checkTotalResultIsCorrect(total: number) {
    this.simpleForm.getTotalResult().should('have.text', total)
  }
}

export default SimpleFormDemoPage
