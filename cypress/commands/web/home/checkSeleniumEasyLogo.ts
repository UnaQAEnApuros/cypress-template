declare global {
  namespace Cypress {
    interface Chainable {
      checkSeleniumEasyLogo: typeof checkSeleniumEasyLogo;
    }
  }
}

/**
 * @description  Method to check if the Selenium Easy Logo is visible.
 */
export const checkSeleniumEasyLogo = (): Cypress.Chainable => {
  return cy.get('.logo > a > img').should('be.visible');
};
