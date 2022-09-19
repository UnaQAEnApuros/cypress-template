/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../support/pageobjects/HomePage';

describe('Home Tests', function () {
  const home = new HomePage();
  qase(
    [46],
    it('[46, WEB] should visit the web and check that the header is displayed properly', function () {
      home.visit();
      home.isReady();
      home.checkSeleniumEasyLogoIsVisible();
      home.checkCrossBrowserTestingLogoIsVisible();
    })
  );

  qase(
    [47],
    it('[47, WEB] should visit the web and check if the menu is displayed properly', function () {
      home.visit();
      home.isReady();
      home.checkAllExamplesMenuOptionIsVisible();
      home.checkInputFormMenuOptionIsVisible();
      home.checkDatePickersMenuOptionIsVisible();
      home.checkTableMenuOptionIsVisible();
      home.checkProgressBarsSlidersMenuOptionIsVisible();
      home.checkAlertsModalsmMenuOptionIsVisible();
      home.checkListBoxMenuOptionIsVisible();
      home.checkOthersMenuOptionIsVisible();
    })
  );
});
