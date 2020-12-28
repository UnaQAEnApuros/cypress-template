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

});


