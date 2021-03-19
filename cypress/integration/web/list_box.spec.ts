/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env();
import { qase } from "cypress-qase-reporter/dist/mocha";
import HomePage from "../../support/pageobjects/HomePage";

describe("List Box Tests", function () {
  const home = new HomePage();

  qase(
    [40],
    it("[40, WEB] should visit the web and click on the List Box Link", function () {
      home.visit();
      home.isReady();
      home.closePopUp();
      const listBox = home.clickOnJQueryListBoxLinkHeader();
      listBox.isReady();
    })
  );

  qase(
    [41],
    it("[41, WEB] should visit the web and click on the Jquery List Link", function () {
      home.visit();
      home.isReady();
      home.closePopUp();
      const jqueryList = home.clickOnJQueryListBoxLinkHeader();
      jqueryList.isReady();
    })
  );

  qase(
    [42],
    it("[42, WEB] should visit the web and click on the Data List Filter Link", function () {
      home.visit();
      home.isReady();
      home.closePopUp();
      const dataListFilter = home.clickOnDataListFilterLinkHeader();
      dataListFilter.isReady();
    })
  );
});
