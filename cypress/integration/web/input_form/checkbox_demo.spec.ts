/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env()
import { qase } from 'cypress-qase-reporter/dist/mocha'
import HomePage from '../../../support/pageobjects/HomePage'

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

describe('Checkbox Demo Tests', function () {
  const home = new HomePage()

  for (let [key, value] of dimensions) {
    qase(
      [50],
      it('[50 , WEB] should click on the first checkbox and see the correct message', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const checkbox = home.clickOnCheckboxDemoLinkHeader()
        checkbox.isReady()
        checkbox.clickOnFirstCheckbox()
        checkbox.checkFirstCheckboxMessage()
      })
    )

    qase(
      [51],
      it('[51, WEB] should click on the Check All button and see that all the options are selected', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const checkbox = home.clickOnCheckboxDemoLinkHeader()
        checkbox.isReady()
        checkbox.checkAllButtonsAreNotSelected()
        checkbox.clickOnSelectAllButton()
        checkbox.checkAllButtonsAreSelected()
      })
    )
  }
})
