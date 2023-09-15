declare global {
  namespace Cypress {
    interface Chainable {
      closePopUp: typeof closePopUp;
    }
  }
}

/**
 * @description  Method to click to close the popup once is displayed.
 */
export const closePopUp = (): Cypress.Chainable => {
  return cy.get('#at-cv-lightbox-header', { timeout: 30_000 }).then($popup => {
    if (Cypress.dom.isVisible($popup)) {
      cy.log('The popup is displayed').then(() => {
        cy.get('#at-cv-lightbox-close').click();
      });
    }
  });
};
