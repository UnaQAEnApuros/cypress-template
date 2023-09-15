const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../support/pageobjects/HomePage';

describe('List Box Tests', function () {
  const home = new HomePage();

  qase(
    [40],
    it('[40, WEB] should visit the web and click on the List Box Link', function () {
      cy.visitHomePage();

      const listBox = home.clickOnJQueryListBoxLinkHeader();
      listBox.isReady();
    })
  );

  qase(
    [41],
    it('[41, WEB] should visit the web and click on the Jquery List Link', function () {
      cy.visitHomePage();

      const jqueryList = home.clickOnJQueryListBoxLinkHeader();
      jqueryList.isReady();
    })
  );

  qase(
    [42],
    it('[42, WEB] should visit the web and click on the Data List Filter Link', function () {
      cy.visitHomePage();

      const dataListFilter = home.clickOnDataListFilterLinkHeader();
      dataListFilter.isReady();
    })
  );
});
