import { qase } from 'cypress-qase-reporter/mocha';

describe('Others Tests', function () {
  qase(
    [43],
    it('[43, WEB] should visit the web and click on the Drag and Drop Link', function () {
      cy.visitHomePage();

      cy.get(':nth-child(4) > .dropdown-toggle').contains('Others').click();
      cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Drag and Drop').click();
    }),
  );

  qase(
    [44],
    it('[44, WEB] should visit the web and click on the Dynamic Data Link', function () {
      cy.visitHomePage();
      cy.get(':nth-child(4) > .dropdown-toggle').contains('Others').click();
      cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Dynamic Data Loading').click();
    }),
  );

  qase(
    [45],
    it('[45, WEB] should visit the web and click on the Charts Demo Link', function () {
      cy.visitHomePage();

      // Needed to avoid the Chart is not defined error.
      Cypress.on('uncaught:exception', () => false);
      cy.get(':nth-child(4) > .dropdown-toggle').contains('Others').click();
      cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Charts Demo').click();
      Cypress.on('uncaught:exception', () => false);
    }),
  );
});
