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

describe('Home Tests', function () {
  const home = new HomePage()
  for (let [key, value] of dimensions) {
    qase(
      [46],
      it('[46, WEB] should visit the web and check that the header is displayed properly', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        home.checkSeleniumEasyLogoIsVisible()
        home.checkCrossBrowserTestingLogoIsVisible()
      })
    )

    qase(
      [47],
      it('[47, WEB] should visit the web and check if the menu is displayed properly', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        home.checkAllExamplesMenuOptionIsVisible()
        home.checkInputFormMenuOptionIsVisible()
        home.checkDatePickersMenuOptionIsVisible()
        home.checkTableMenuOptionIsVisible()
        home.checkProgressBarsSlidersMenuOptionIsVisible()
        home.checkAlertsModalsmMenuOptionIsVisible()
        home.checkListBoxMenuOptionIsVisible()
        home.checkOthersMenuOptionIsVisible()
      })
    )
  }
})
