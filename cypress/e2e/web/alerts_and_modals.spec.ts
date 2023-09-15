const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../support/pageobjects/HomePage';

describe('Alerts And Modals Tests', function () {
  const home = new HomePage();
  qase(
    [34],
    it('[34, WEB] should visit the web and click on the Bootstrap Alerts Link', function () {
      cy.visitHomePage();

      home.clickOnBootstrapAlertsLinkHeader();
    })
  );

  qase(
    [35],
    it('[35, WEB] should visit the web and click on the Bootstrap Modals Link', function () {
      cy.visitHomePage();

      home.clickOnBootstrapModalsLinkHeader();
    })
  );

  qase(
    [36],
    it('[36, WEB] should visit the web and click on the File Download Link', function () {
      cy.visitHomePage();
      home.clickOnFileDownloadLinkHeader();
    })
  );

  qase(
    [37],
    it('[37, WEB] should visit the web and click on the Javascript Alerts Link', function () {
      cy.visitHomePage();
      home.clickOnJavascriptAlertsLinkHeader();
    })
  );

  qase(
    [38],
    it('[38, WEB] should visit the web and click on the Progress Bar Modal Link', function () {
      cy.visitHomePage();
      home.clickOnProgressBarModalLinkHeader();
    })
  );

  qase(
    [39],
    it('[39, WEB] should visit the web and click on the Windows Popup Modal Link', function () {
      cy.visitHomePage();
      home.clickOnWindowPopupModalLinkHeader();
    })
  );
});
