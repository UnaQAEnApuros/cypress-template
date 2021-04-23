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

describe('Progress Bar Tests', function () {
  const home = new HomePage()

  for (let [key, value] of dimensions) {
    qase(
      [26],
      it('[26, WEB] should visit the web and click on the JQuery Download Progress bars Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const jqueryDownloadProgressBar = home.clickOnJQueryDownloadProgressBarsLinkHeader()
        jqueryDownloadProgressBar.isReady()
      })
    )

    qase(
      [27],
      it('[27, WEB] should visit the web and click on the Bootstrap Progress bar Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const bootstrapProgressBar = home.clickOnBootstrapProgressBarLinkHeader()
        bootstrapProgressBar.isReady()
      })
    )

    qase(
      [28],
      it('[28, WEB] should visit the web and click on the Drag & Drop Sliders Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const dragAndDropSlider = home.clickOnDragAndDropSlidersLinkHeader()
        dragAndDropSlider.isReady()
      })
    )
  }
})
