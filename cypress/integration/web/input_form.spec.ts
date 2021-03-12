/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../support/pageobjects/HomePage';

describe('Input Form Tests', function () {

    const home = new HomePage();

    qase([16],
    it('should visit the web and close the popup', function() {
        home.visit();
        home.isReady();
        home.closePopUp();
    }));

    qase([17],
    it('should visit the web and click on the Simple Form Demo Link', function() {
        home.visit();
        home.isReady();
        home.closePopUp();
        const simpleFormDemo = home.clickOnSimpleFormDemoLinkHeader();
        simpleFormDemo.isReady();
    }));

    qase([18],
    it('should visit the web and click on the Checkbox Demo Link', function() {
        home.visit();
        home.isReady();
        home.closePopUp();
        const checkboxDemo = home.clickOnCheckboxDemoLinkHeader();
        checkboxDemo.isReady();
    }));

    qase([19],
    it('should visit the web and click on the Radio Buttons Demo Link', function() {
        home.visit();
        home.isReady();
        home.closePopUp();
        const radioButtonsDemo = home.clickOnRadioButtonsDemoLinkHeader();
        radioButtonsDemo.isReady();
    }));

    qase([20],
    it('should visit the web and click on the Select Dropdown Link', function() {
        home.visit();
        home.isReady();
        home.closePopUp();
        const selectDropdownList = home.clickOnSelectDropdownListLinkHeader();
        selectDropdownList.isReady();
    }));

    qase([21],
    it('should visit the web and click on the Input Form Submit Link', function() {
        home.visit();
        home.isReady();
        home.closePopUp();
        const inputFormSubmit = home.clickOnInputFormSubmitLinkHeader();
        inputFormSubmit.isReady();
    }));

    qase([22],
    it('should visit the web and click on the Ajax Form Submit Link', function() {
        home.visit();
        home.isReady();
        home.closePopUp();
        const ajaxFormSubmit = home.clickOnAjaxFormSubmitLinkHeader();
        ajaxFormSubmit.isReady();
    }));

    qase([23],
    it('should visit the web and click on the JQuery Select Link', function() {
        home.visit();
        home.isReady();
        home.closePopUp();
        const jQuerySelectDropdown = home.clickOnAjaxFormSubmitLinkHeader();
        jQuerySelectDropdown.isReady();
    }));
});