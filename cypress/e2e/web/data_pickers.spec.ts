import { qase } from 'cypress-qase-reporter/mocha';

describe('Data Pickers Tests', function () {
  qase(
    [24],
    it('[24, WEB] should visit the web and click on the Bootstrap Date Picker Link', function () {
      cy.visitHomePage();
      cy.get(':nth-child(1) > :nth-child(2) > .dropdown-toggle').contains('Date pickers').click();
      cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Bootstrap Date Picker').click();
    }),
  );

  qase(
    [25],
    it('[25, WEB] should visit the web and click on the JQuery Date Picker Link', function () {
      cy.visitHomePage();
      cy.get(':nth-child(1) > :nth-child(2) > .dropdown-toggle').contains('Date pickers').click();
      cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('JQuery Date Picker').click();
    }),
  );
});
