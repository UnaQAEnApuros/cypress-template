import SimpleFormDemoElements from '../../elements/inputforms_el/SimpleForm'

class SimpleFormDemoPage {
  simpleFormDemo: any

  constructor() {
    this.simpleFormDemo = new SimpleFormDemoElements()
  }

  /**
   * Method to check if the SimpleFormDemoPage is visible
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
    this.simpleFormDemo.getUserMessageInput().click().clear().type(message)
  }

  clickOnShowMessage() {
    this.simpleFormDemo.getShowMessageButton().click()
  }

  checkYourMessageIsCorrect(message: string) {
    this.simpleFormDemo.getYourMessageText().should('have.text', message)
  }

  enterValueA(a: number) {
    this.simpleFormDemo.getInput1Sum().click().clear().type(a)
  }

  enterValueB(b: number) {
    this.simpleFormDemo.getInput2Sum().click().clear().type(b)
  }

  clickOnGetTotalutton() {
    this.simpleFormDemo.getTotalButton().click()
  }

  checkTotalResultIsCorrect(total: number) {
    this.simpleFormDemo.getTotalResult().should('have.text', total)
  }
}

export default SimpleFormDemoPage
