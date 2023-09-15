import { qase } from 'cypress-qase-reporter/dist/mocha';

describe('Alerts And Modals Tests', function () {
  qase(
    [34],
    it('[34, WEB] should visit the web and click on the Bootstrap Alerts Link', function () {
      cy.visitHomePage();
      cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals').click();
      cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Bootstrap Alerts').click();
    })
  );

  qase(
    [35],
    it('[35, WEB] should visit the web and click on the Bootstrap Modals Link', function () {
      cy.visitHomePage();
      cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals').click();
      cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Bootstrap Modals').click();
    })
  );

  qase(
    [36],
    it('[36, WEB] should visit the web and click on the File Download Link', function () {
      cy.visitHomePage();
      cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals').click();
      cy.get('.open > .dropdown-menu > :nth-child(6) > a').contains('File Download').click();
    })
  );

  qase(
    [37],
    it('[37, WEB] should visit the web and click on the Javascript Alerts Link', function () {
      cy.visitHomePage();
      cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals').click();
      cy.get('.open > .dropdown-menu > :nth-child(5) > a').contains('Javascript Alerts').click();
    })
  );

  qase(
    [38],
    it('[38, WEB] should visit the web and click on the Progress Bar Modal Link', function () {
      cy.visitHomePage();
      cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals').click();
      cy.get('.open > .dropdown-menu > :nth-child(4) > a').contains('Progress Bar Modal').click();
    })
  );

  qase(
    [39],
    it('[39, WEB] should visit the web and click on the Windows Popup Modal Link', function () {
      cy.visitHomePage();
      cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals').click();
      cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Window Popup Modal').click();
    })
  );
});
