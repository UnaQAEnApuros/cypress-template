const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../support/pageobjects/HomePage';

describe('Data Pickers Tests', function () {
  const home = new HomePage();

  qase(
    [24],
    it('[24, WEB] should visit the web and click on the Bootstrap Date Picker Link', function () {
      cy.visitHomePage();
      home.isReady();
      const bootstrapDatePickers = home.clickOnBootstrapDatePickerLinkHeader();
      bootstrapDatePickers.isReady();
    })
  );

  qase(
    [25],
    it('[25, WEB] should visit the web and click on the JQuery Date Picker Link', function () {
      cy.visitHomePage();
      home.isReady();
      const jqueryDatePickers = home.clickOnJQueryDatePickerLinkHeader();
      jqueryDatePickers.isReady();
    })
  );
});
