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
export const visitHomePage = (): Cypress.Chainable => {
  cy.visit(Cypress.env().webURL);

  // Check that the header is visible
  cy.get('.topper').should('be.visible');
  cy.get('.navbar').should('be.visible');

  cy.url().should('eq', 'https://demo.seleniumeasy.com/');
  cy.get('body > :nth-child(2)').should('be.visible');
  cy.get('#easycont > :nth-child(1)').should('be.visible');

  // Check that the footer is visible
  return cy.get('.footer').should('be.visible');
};
