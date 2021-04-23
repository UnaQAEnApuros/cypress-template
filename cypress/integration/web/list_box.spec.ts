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

describe('List Box Tests', function () {
  const home = new HomePage()

  for (let [key, value] of dimensions) {
    qase(
      [40],
      it('[40, WEB] should visit the web and click on the List Box Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const listBox = home.clickOnJQueryListBoxLinkHeader()
        listBox.isReady()
      })
    )

    qase(
      [41],
      it('[41, WEB] should visit the web and click on the Jquery List Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const jqueryList = home.clickOnJQueryListBoxLinkHeader()
        jqueryList.isReady()
      })
    )

    qase(
      [42],
      it('[42, WEB] should visit the web and click on the Data List Filter Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const dataListFilter = home.clickOnDataListFilterLinkHeader()
        dataListFilter.isReady()
      })
    )
  }
})
