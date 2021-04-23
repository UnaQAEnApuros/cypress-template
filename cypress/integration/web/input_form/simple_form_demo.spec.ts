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

describe('Simple Form Demo Tests', function () {
  const home = new HomePage()
  for (let [key, value] of dimensions) {
    qase(
      [48],
      it('[48, WEB] should enter a message and check that is correct', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const simpleFormDemo = home.clickOnSimpleFormDemoLinkHeader()
        simpleFormDemo.isReady()
        simpleFormDemo.enterMessage('Cypress Example Project')
        simpleFormDemo.clickOnShowMessage()
        simpleFormDemo.checkYourMessageIsCorrect('Cypress Example Project')
      })
    )

    qase(
      [49],
      it('[49, WEB] should enter two numbers and check that the sum is correct', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const simpleFormDemo = home.clickOnSimpleFormDemoLinkHeader()
        simpleFormDemo.isReady()
        simpleFormDemo.enterValueA(1)
        simpleFormDemo.enterValueB(3)
        simpleFormDemo.clickOnGetTotalutton()
        simpleFormDemo.checkTotalResultIsCorrect(1 + 3)
      })
    )
  }
})
