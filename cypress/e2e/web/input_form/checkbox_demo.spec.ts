const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../../support/pageobjects/HomePage';

describe('Checkbox Demo Tests', function () {
  const home = new HomePage();

  qase(
    [50],
    it('[50 , WEB] should click on the first checkbox and see the correct message', function () {
      cy.visitHomePage();
      cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
      cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Checkbox Demo').click();
      cy.get('#isAgeSelected').click();
      cy.get('#txtAge').contains('Success - Check box is checked');
    })
  );

  qase(
    [51],
    it('[51, WEB] should click on the Check All button and see that all the options are selected', function () {
      cy.visitHomePage();

      cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
      cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Checkbox Demo').click();

      cy.xpath("//input[@id='isChkd']").should('have.value', 'false');
      cy.get('#check1').click();
      cy.xpath("//input[@id='isChkd']").should('have.value', 'true');
    })
  );
});
