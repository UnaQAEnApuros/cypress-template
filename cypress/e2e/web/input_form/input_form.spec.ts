const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../../support/pageobjects/HomePage';

describe('Input Form Tests', function () {
  const home = new HomePage();
  qase(
    [16],
    it('[16, WEB] should visit the web and close the popup', function () {
      cy.visitHomePage();
    })
  );

  qase(
    [17],
    it('[17, WEB] should visit the web and click on the Simple Form Demo Link', function () {
      cy.visitHomePage();

      home.clickOnSimpleFormDemoLinkHeader();
    })
  );

  qase(
    [18],
    it('[18, WEB] should visit the web and click on the Checkbox Demo Link', function () {
      cy.visitHomePage();

      cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
      cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Checkbox Demo').click();
    })
  );

  qase(
    [19],
    it('[19, WEB] should visit the web and click on the Radio Buttons Demo Link', function () {
      cy.visitHomePage();

      home.clickOnRadioButtonsDemoLinkHeader();
    })
  );

  qase(
    [20],
    it('[20, WEB] should visit the web and click on the Select Dropdown Link', function () {
      cy.visitHomePage();

      home.clickOnSelectDropdownListLinkHeader();
    })
  );

  qase(
    [21],
    it('[21, WEB] should visit the web and click on the Input Form Submit Link', function () {
      cy.visitHomePage();

      home.clickOnInputFormSubmitLinkHeader();
    })
  );

  qase(
    [22],
    it('[22, WEB] should visit the web and click on the Ajax Form Submit Link', function () {
      cy.visitHomePage();

      home.clickOnAjaxFormSubmitLinkHeader();
    })
  );

  qase(
    [23],
    it('[23, WEB] should visit the web and click on the JQuery Select Link', function () {
      cy.visitHomePage();

      home.clickOnJqueryFormSubmitLinkHeader();
    })
  );
});
