import { Log } from 'cypress/utils/log/log';

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
  const log = new Log('Check Selenium Easy Logo', `Checking if the Selenium Easy Logo is visible...`);

  return cy
    .get('.logo > a > img')
    .should('be.visible')
    .then(() => log.end());
};
