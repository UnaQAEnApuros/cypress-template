import { qase } from 'cypress-qase-reporter/dist/mocha';

describe('Simple Form Demo Tests', function () {
  qase(
    [48],
    it('[48, WEB] should enter a message and check that is correct', function () {
      cy.visitHomePage();

      cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
      cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Simple Form Demo').click();
      cy.get('.form-group > #user-message').click().clear().type('Cypress Example Project');
      cy.get('#get-input > .btn').contains('Show Message').click();
      cy.get('#display').should('have.text', 'Cypress Example Project');
    })
  );

  qase(
    [49],
    it('[49, WEB] should enter two numbers and check that the sum is correct', function () {
      cy.visitHomePage();
      cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
      cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Simple Form Demo').click();
      cy.get('#value1').click().clear().type('1');
      cy.get('#value2').click().clear().type('3');
      cy.get('#gettotal > .btn').contains('Get Total').click();
      cy.get('#displayvalue').should('have.text', 1 + 3);
    })
  );
});
