import { env } from 'process';

declare global {
  namespace Cypress {
    interface Chainable {
      visitHomePage: typeof visitHomePage;
    }
  }
}

/**
 * @description Method to visit the webpage URL
 */
export const visitHomePage = (): Cypress.Chainable => cy.visit(Cypress.env().webURL);
