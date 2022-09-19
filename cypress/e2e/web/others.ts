/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../support/pageobjects/HomePage';

describe('Others Tests', function () {
  const home = new HomePage();

  qase(
    [43],
    it('[43, WEB] should visit the web and click on the Drag and Drop Link', function () {
      home.visit();
      home.isReady();
      const dragAndDrop = home.clickOnDragAndDropLinkHeader();
      dragAndDrop.isReady();
    })
  );

  qase(
    [44],
    it('[44, WEB] should visit the web and click on the Dynamic Data Link', function () {
      home.visit();
      home.isReady();
      const dynamicData = home.clickOnDynamicDataLoadingLinkHeader();
      dynamicData.isReady();
    })
  );

  qase(
    [45],
    it('[45, WEB] should visit the web and click on the Charts Demo Link', function () {
      home.visit();
      home.isReady();
      const chartsDemo = home.clickOnChartsDemoDropdownLinkHeader();
      chartsDemo.isReady();
    })
  );
});
