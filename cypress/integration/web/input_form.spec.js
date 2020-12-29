/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../support/pageobjects/HomePage';

describe('Web Example', function () {

    const home = new HomePage();

    beforeEach(function() {
        home.visit();
        home.isReady();
    });

    qase([16],
    it('shoud visit the web and close the popup', function() {
        home.closePopUp();
    }));

    qase([17],
    it('shoud visit the web and click on the Simple Form Demo Link', function() {
        home.closePopUp();
        const simpleFormDemo = home.clickOnSimpleFormDemoLinkHeader();
        simpleFormDemo.isReady();
    }));

    qase([],
    it('shoud visit the web and click on the Checkbox Demo Link', function() {
        home.closePopUp();
        const checkboxDemo = home.clickOnCheckboxDemoLinkHeader();
        checkboxDemo.isReady();
    }));

    qase([],
    it('shoud visit the web and click on the Radio Buttons Demo Link', function() {
        home.closePopUp();
        const radioButtonsDemo = home.clickOnRadioButtonsDemoLinkHeader();
        radioButtonsDemo.isReady();
    }));

    qase([],
    it('shoud visit the web and click on the Select Dropdown Link', function() {
        home.closePopUp();
        const selectDropdownList = home.clickOnSelectDropdownListLinkHeader();
        selectDropdownList.isReady();
    }));

    qase([],
    it('shoud visit the web and click on the Input Form Submit Link', function() {
        home.closePopUp();
        const inputFormSubmit = home.clickOnInputFormSubmitLinkHeader();
        inputFormSubmit.isReady();
    }));

    qase([],
    it('shoud visit the web and click on the Ajax Form Submit Link', function() {
        home.closePopUp();
        const ajaxFormSubmit = home.clickOnAjaxFormSubmitLinkHeader();
        ajaxFormSubmit.isReady();
    }));

    qase([],
    it('shoud visit the web and click on the JQuery Select Link', function() {
        home.closePopUp();
        const jQuerySelectDropdown = home.clickOnAjaxFormSubmitLinkHeader();
        jQuerySelectDropdown.isReady();
    }));
});