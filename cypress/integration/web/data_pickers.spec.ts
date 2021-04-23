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

describe('Data Pickers Tests', function () {
  const home = new HomePage()

  for (let [key, value] of dimensions) {
    qase(
      [24],
      it('[24, WEB] should visit the web and click on the Bootstrap Date Picker Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const bootstrapDatePickers = home.clickOnBootstrapDatePickerLinkHeader()
        bootstrapDatePickers.isReady()
      })
    )

    qase(
      [25],
      it('[25, WEB] should visit the web and click on the JQuery Date Picker Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const jqueryDatePickers = home.clickOnJQueryDatePickerLinkHeader()
        jqueryDatePickers.isReady()
      })
    )
  }
})
