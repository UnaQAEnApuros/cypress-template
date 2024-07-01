import { qase } from 'cypress-qase-reporter/mocha';

describe('Home Tests', function () {
  qase(
    [46],
    it('[46, WEB] should visit the web and check that the header is displayed properly', function () {
      cy.visitHomePage();
      cy.checkSeleniumEasyLogo();
    }),
  );

  qase(
    [47],
    it('[47, WEB] should visit the web and check if the menu is displayed properly', function () {
      cy.visitHomePage();
      cy.checkHomePageMenu();
    }),
  );
});
