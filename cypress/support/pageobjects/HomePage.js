import Header from './Header';
import Footer from './Footer';
import SimpleFormDemoPage from './inputforms/SimpleFormDemoPage';

const env = Cypress.env();

class HomePage {

  /**
   * Homepage constructor. We need to create a new instance of the Header and the Footer. 
   */
  constructor() {
    this.header = new Header();
    this.footer = new Footer();
  }
  
  /**
   * Method to visit the webpage URL
   */
  visit() {
    cy.visit(env.webURL);
  }

  /**
   * Method to check if the Homepage is loaded (include the Header and Footer elements)
   */
  isReady() {
    this.header.isReady();

    cy.url().should('eq', 'https://www.seleniumeasy.com/test/');
    cy.get('body > :nth-child(2)').should('be.visible');
    cy.get('#easycont > :nth-child(1)').should('be.visible');

    this.footer.isReady();
  }

  /**
   * Method to click to close the popup once is displayed. 
   */
  closePopUp(){
    const checkPopup = () => cy.get('#at-cv-lightbox-header').should('be.visible');
    cy.waitUntil(checkPopup).then(() => {
      cy.get('#at-cv-lightbox-close').click();
    });
  }

  /**
   * Method to click on the Simple Form Demo option on the header menu. 
   */
  clickOnSimpleFormDemoLinkHeader(){
    this.header.getInputForm().click();
    this.header.getSimpleFormDemo().click();

    const simpleFormDemo = new SimpleFormDemoPage();
    return simpleFormDemo;
  }
}

export default HomePage;