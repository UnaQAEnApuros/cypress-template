const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../support/pageobjects/HomePage';

describe('Table Tests', function () {
  const home = new HomePage();
  qase(
    [29],
    it('[29, WEB] should visit the web and click on the Table Pagination Link', function () {
      cy.visitHomePage();
      home.isReady();

      const tablePagination = home.clickOnTablePaginationLinkHeader();
      tablePagination.isReady();
    })
  );

  qase(
    [30],
    it('[30, WEB] should visit the web and click on the Table Data Search Link', function () {
      cy.visitHomePage();
      home.isReady();

      const tableDataSearch = home.clickOnTableDataSearchLinkHeader();
      tableDataSearch.isReady();
    })
  );

  qase(
    [31],
    it('[31, WEB] should visit the web and click on the Table Filter Link', function () {
      cy.visitHomePage();
      home.isReady();

      const tableFilter = home.clickOnTableFilterLinkHeader();
      tableFilter.isReady();
    })
  );

  qase(
    [32],
    it('[32, WEB] should visit the web and click on the Table Sort & Search Link', function () {
      cy.visitHomePage();
      home.isReady();

      const tableSortAndSearch = home.clickOnTableSortAndSearchLinkHeader();
      tableSortAndSearch.isReady();
    })
  );

  qase(
    [33],
    it('[33, WEB] should visit the web and click on the Table Data Download Link', function () {
      cy.visitHomePage();
      home.isReady();

      const tableDataDownload = home.clickOnTableDataDownloadLinkHeader();
      tableDataDownload.isReady();
    })
  );
});
