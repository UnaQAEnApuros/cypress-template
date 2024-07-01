import { qase } from 'cypress-qase-reporter/mocha';
import { it } from 'mocha';

describe('Table Tests', function () {
  qase(
    [29],
    it('[29, WEB] should visit the web and click on the Table Pagination Link', function () {
      cy.visitHomePage();
      cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').contains('Table').click();
      cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Table Pagination').click();
    }),
  );

  qase(
    [30],
    it('[30, WEB] should visit the web and click on the Table Data Search Link', function () {
      cy.visitHomePage();
      cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').contains('Table').click();
      cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Table Data Search').click();
    }),
  );

  qase(
    [31],
    it('[31, WEB] should visit the web and click on the Table Filter Link', function () {
      cy.visitHomePage();
      cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').contains('Table').click();
      cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Table Filter').click();
    }),
  );

  qase(
    [32],
    it('[32, WEB] should visit the web and click on the Table Sort & Search Link', function () {
      cy.visitHomePage();
      cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').contains('Table').click();
      cy.get('.open > .dropdown-menu > :nth-child(4) > a').contains('Table Sort & Search').click();
    }),
  );

  qase(
    [33],
    it('[33, WEB] should visit the web and click on the Table Data Download Link', function () {
      cy.visitHomePage();
      cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').contains('Table').click();
      cy.get('.open > .dropdown-menu > :nth-child(5) > a').contains('Table Data Download').click();
    }),
  );
});
