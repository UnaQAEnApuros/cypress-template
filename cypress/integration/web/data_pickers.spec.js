/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../support/pageobjects/HomePage';

describe('Data Pickers Tests', function () {

    const home = new HomePage();

    qase([24],
    it('should visit the web and click on the Bootstrap Date Picker Link', function() {
        home.visit();
        home.isReady();
        home.closePopUp();
        const bootstrapDatePickers = home.clickOnBootstrapDatePickerLinkHeader();
        bootstrapDatePickers.isReady();
    }));

    qase([25],
    it('should visit the web and click on the JQuery Date Picker Link', function() {
        home.visit();
        home.isReady();
        home.closePopUp();
        const jqueryDatePickers = home.clickOnJQueryDatePickerLinkHeader();
        jqueryDatePickers.isReady();
    }));
});