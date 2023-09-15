import { should } from 'chai';

declare global {
  namespace Cypress {
    interface Chainable {
      checkHomePageMenu: typeof checkHomePageMenu;
    }
  }
}

/**
 * @description  Method to check if the homepage menu is displayed properly
 */
export const checkHomePageMenu = (): Cypress.Chainable => {
  cy.contains('All Examples').should('be.visible');
  cy.contains('Input Forms').should('be.visible');
  cy.contains('Date pickers').should('be.visible');
  cy.contains('Table').should('be.visible');
  cy.contains('Progress Bars & Sliders').should('be.visible');
  cy.contains('Alerts & Modals').should('be.visible');
  cy.contains('List Box').should('be.visible');
  return cy.contains('Others').should('be.visible');
};
