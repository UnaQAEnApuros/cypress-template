/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../support/pageobjects/HomePage';

describe('Table Tests', function () {

    const home = new HomePage();

    beforeEach(function() {
        home.visit();
        home.isReady();
    });

    qase([29],
    it('should visit the web and click on the Table Pagination Link', function() {
        home.closePopUp();
        const tablePagination = home.clickOnTablePaginationLinkHeader();
        tablePagination.isReady();
    }));

    qase([30],
    it('should visit the web and click on the Table Data Search Link', function() {
        home.closePopUp();
        const tableDataSearch = home.clickOnTableDataSearchLinkHeader();
        tableDataSearch.isReady();
    }));

    qase([31],
    it('should visit the web and click on the Table Filter Link', function() {
        home.closePopUp();
        const tableFilter = home.clickOnTableFilterLinkHeader();
        tableFilter.isReady();
    }));

    qase([32],
    it('should visit the web and click on the Table Sort & Search Link', function() {
        home.closePopUp();
        const tableSortAndSearch = home.clickOnTableSortAndSearchLinkHeader();
        tableSortAndSearch.isReady();
    }));

    qase([33],
    it('should visit the web and click on the Table Data Download Link', function() {
        home.closePopUp();
        const tableDataDownload = home.clickOnTableDataDownloadLinkHeader();
        tableDataDownload.isReady();
    }));
});