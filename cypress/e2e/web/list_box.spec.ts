import { qase } from 'cypress-qase-reporter/dist/mocha';

describe('List Box Tests', function () {
  qase(
    [40],
    it('[40, WEB] should visit the web and click on the List Box Link', function () {
      cy.visitHomePage();
      cy.get('.navbar-right > :nth-child(3) > .dropdown-toggle').contains('List Box').click();
      cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('JQuery List Box').click();
    })
  );

  qase(
    [42],
    it('[42, WEB] should visit the web and click on the Data List Filter Link', function () {
      cy.visitHomePage();
      cy.get('.navbar-right > :nth-child(3) > .dropdown-toggle').contains('List Box').click();
      cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Data List Filter').click();
    })
  );
});
