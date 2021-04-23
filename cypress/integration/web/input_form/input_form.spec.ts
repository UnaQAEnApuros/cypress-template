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

describe('Input Form Tests', function () {
  const home = new HomePage()
  for (let [key, value] of dimensions) {
    qase(
      [16],
      it('[16, WEB] should visit the web and close the popup', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
      })
    )

    qase(
      [17],
      it('[17, WEB] should visit the web and click on the Simple Form Demo Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const simpleForm = home.clickOnSimpleFormDemoLinkHeader()
        simpleForm.isReady()
      })
    )

    qase(
      [18],
      it('[18, WEB] should visit the web and click on the Checkbox Demo Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const checkboxDemo = home.clickOnCheckboxDemoLinkHeader()
        checkboxDemo.isReady()
      })
    )

    qase(
      [19],
      it('[19, WEB] should visit the web and click on the Radio Buttons Demo Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const radioButtonsDemo = home.clickOnRadioButtonsDemoLinkHeader()
        radioButtonsDemo.isReady()
      })
    )

    qase(
      [20],
      it('[20, WEB] should visit the web and click on the Select Dropdown Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const selectDropdownList = home.clickOnSelectDropdownListLinkHeader()
        selectDropdownList.isReady()
      })
    )

    qase(
      [21],
      it('[21, WEB] should visit the web and click on the Input Form Submit Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const inputFormSubmit = home.clickOnInputFormSubmitLinkHeader()
        inputFormSubmit.isReady()
      })
    )

    qase(
      [22],
      it('[22, WEB] should visit the web and click on the Ajax Form Submit Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const ajaxFormSubmit = home.clickOnAjaxFormSubmitLinkHeader()
        ajaxFormSubmit.isReady()
      })
    )

    qase(
      [23],
      it('[23, WEB] should visit the web and click on the JQuery Select Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const jQuerySelectDropdown = home.clickOnJqueryFormSubmitLinkHeader()
        jQuerySelectDropdown.isReady()
      })
    )
  }
})
