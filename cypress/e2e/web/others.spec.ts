const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../support/pageobjects/HomePage';

describe('Others Tests', function () {
  const home = new HomePage();

  qase(
    [43],
    it('[43, WEB] should visit the web and click on the Drag and Drop Link', function () {
      cy.visitHomePage();

      home.clickOnDragAndDropLinkHeader();
    })
  );

  qase(
    [44],
    it('[44, WEB] should visit the web and click on the Dynamic Data Link', function () {
      cy.visitHomePage();

      home.clickOnDynamicDataLoadingLinkHeader();
    })
  );

  qase(
    [45],
    it('[45, WEB] should visit the web and click on the Charts Demo Link', function () {
      cy.visitHomePage();

      // Needed to avoid the Chart is not defined error.
      Cypress.on('uncaught:exception', () => false);
      home.clickOnChartsDemoDropdownLinkHeader();
    })
  );
});
