/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env()
import { qase } from 'cypress-qase-reporter/dist/mocha'
import HomePage from '../../../support/pageobjects/HomePage'

describe('Simple Form Demo Tests', function () {
  const home = new HomePage()

  qase(
    [48],
    it('[48, WEB] should enter a message and check that is correct', function () {
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
})
