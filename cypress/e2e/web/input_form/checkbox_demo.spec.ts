const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../../support/pageobjects/HomePage';

describe('Checkbox Demo Tests', function () {
  const home = new HomePage();

  qase(
    [50],
    it('[50 , WEB] should click on the first checkbox and see the correct message', function () {
      cy.visitHomePage();

      const checkbox = home.clickOnCheckboxDemoLinkHeader();
      checkbox.isReady();
      checkbox.clickOnFirstCheckbox();
      checkbox.checkFirstCheckboxMessage();
    })
  );

  qase(
    [51],
    it('[51, WEB] should click on the Check All button and see that all the options are selected', function () {
      cy.visitHomePage();

      const checkbox = home.clickOnCheckboxDemoLinkHeader();
      checkbox.isReady();
      checkbox.checkAllButtonsAreNotSelected();
      checkbox.clickOnSelectAllButton();
      checkbox.checkAllButtonsAreSelected();
    })
  );
});
