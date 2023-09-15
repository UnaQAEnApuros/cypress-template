const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../support/pageobjects/HomePage';

describe('Progress Bar Tests', function () {
  const home = new HomePage();

  qase(
    [26],
    it('[26, WEB] should visit the web and click on the JQuery Download Progress bars Link', function () {
      cy.visitHomePage();

      home.clickOnJQueryDownloadProgressBarsLinkHeader();
    })
  );

  qase(
    [27],
    it('[27, WEB] should visit the web and click on the Bootstrap Progress bar Link', function () {
      cy.visitHomePage();

      home.clickOnBootstrapProgressBarLinkHeader();
    })
  );

  qase(
    [28],
    it('[28, WEB] should visit the web and click on the Drag & Drop Sliders Link', function () {
      cy.visitHomePage();

      home.clickOnDragAndDropSlidersLinkHeader();
    })
  );
});
