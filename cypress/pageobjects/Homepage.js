import Header from './Header';

const env = Cypress.env();

class HomePage {
  constructor() {
    this.header = new Header();
  }
  
  visit() {
    cy.visit(env.webURL);
  }
}

export default HomePage;