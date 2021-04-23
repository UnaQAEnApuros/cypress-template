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

describe('Alerts And Modals Tests', function () {
  const home = new HomePage()
  for (let [key, value] of dimensions) {
    qase(
      [34],
      it('[34, WEB] should visit the web and click on the Bootstrap Alerts Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const bootstrapAlerts = home.clickOnBootstrapAlertsLinkHeader()
        bootstrapAlerts.isReady()
      })
    )

    qase(
      [35],
      it('[35, WEB] should visit the web and click on the Bootstrap Modals Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const bootstrapModals = home.clickOnBootstrapModalsLinkHeader()
        bootstrapModals.isReady()
      })
    )

    qase(
      [36],
      it('[36, WEB] should visit the web and click on the File Download Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const fileDownload = home.clickOnFileDownloadLinkHeader()
        fileDownload.isReady()
      })
    )

    qase(
      [37],
      it('[37, WEB] should visit the web and click on the Javascript Alerts Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const javascriptAlerts = home.clickOnJavascriptAlertsLinkHeader()
        javascriptAlerts.isReady()
      })
    )

    qase(
      [38],
      it('[38, WEB] should visit the web and click on the Progress Bar Modal Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const progressBarModal = home.clickOnProgressBarModalLinkHeader()
        progressBarModal.isReady()
      })
    )

    qase(
      [39],
      it('[39, WEB] should visit the web and click on the Windows Popup Modal Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const windowsPopupModal = home.clickOnWindowPopupModalLinkHeader()
        windowsPopupModal.isReady()
      })
    )
  }
})
