/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env()
import { qase } from 'cypress-qase-reporter/dist/mocha'
import HomePage from '../../support/pageobjects/HomePage'

let dimensions = new Map([
  // Desktop Screens
  [1920, 1200], //24"
  [1921, 1080], //23"
  [1922, 1050], //22"
  [1600, 900], //20"
  [1440, 900], //19"
  [1366, 678], //15"
  [1024, 800], //13"
  [1025, 600] //10"
])

describe('Others Tests', function () {
  const home = new HomePage()

  for (let [key, value] of dimensions) {
    qase(
      [43],
      it('[43, WEB] should visit the web and click on the Drag and Drop Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const dragAndDrop = home.clickOnDragAndDropLinkHeader()
        dragAndDrop.isReady()
      })
    )

    qase(
      [44],
      it('[44, WEB] should visit the web and click on the Dynamic Data Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const dynamicData = home.clickOnDynamicDataLoadingLinkHeader()
        dynamicData.isReady()
      })
    )

    qase(
      [45],
      it('[45, WEB] should visit the web and click on the Charts Demo Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const chartsDemo = home.clickOnChartsDemoDropdownLinkHeader()
        chartsDemo.isReady()
      })
    )
  }
})
