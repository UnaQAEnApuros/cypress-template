import { qase } from 'cypress-qase-reporter/dist/mocha';

describe('Progress Bar Tests', function () {
  qase(
    [26],
    it('[26, WEB] should visit the web and click on the JQuery Download Progress bars Link', function () {
      cy.visitHomePage();
      cy.get('.navbar-right > :nth-child(1) > .dropdown-toggle').contains('Progress Bars').click();
      cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('JQuery Download Progress bars').click();
    })
  );

  qase(
    [27],
    it('[27, WEB] should visit the web and click on the Bootstrap Progress bar Link', function () {
      cy.visitHomePage();
      cy.get('.navbar-right > :nth-child(1) > .dropdown-toggle').contains('Progress Bars').click();
      cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Bootstrap Progress bar').click();
    })
  );

  qase(
    [28],
    it('[28, WEB] should visit the web and click on the Drag & Drop Sliders Link', function () {
      cy.visitHomePage();
      cy.get('.navbar-right > :nth-child(1) > .dropdown-toggle').contains('Progress Bars').click();
      cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Drag & Drop Sliders').click();
    })
  );
});
