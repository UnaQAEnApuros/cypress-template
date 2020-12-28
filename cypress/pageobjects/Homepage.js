import Header from './Header';
import Footer from './Footer';

const env = Cypress.env();

class HomePage {

  constructor() {
    this.header = new Header();
    this.footer = new Footer();
  }
  
  visit() {
    cy.visit(env.webURL);
  }

  isReady() {
    this.header.isReady();

    cy.url().should('eq', 'https://www.seleniumeasy.com/test/');
    cy.get('body > :nth-child(2)').should('be.visible');
    cy.get('#easycont > :nth-child(1)').should('be.visible');

    this.footer.isReady();
  }

  closePopUp(){
    const checkPopup = () => cy.get('#at-cv-lightbox-header').should('be.visible');
    cy.waitUntil(checkPopup).then(() => {
      cy.get('#at-cv-lightbox-close').click();
    });
  }

}

export default HomePage;