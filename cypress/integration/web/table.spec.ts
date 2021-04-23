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

describe('Table Tests', function () {
  const home = new HomePage()
  for (let [key, value] of dimensions) {
    qase(
      [29],
      it('[29, WEB] should visit the web and click on the Table Pagination Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const tablePagination = home.clickOnTablePaginationLinkHeader()
        tablePagination.isReady()
      })
    )

    qase(
      [30],
      it('[30, WEB] should visit the web and click on the Table Data Search Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const tableDataSearch = home.clickOnTableDataSearchLinkHeader()
        tableDataSearch.isReady()
      })
    )

    qase(
      [31],
      it('[31, WEB] should visit the web and click on the Table Filter Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const tableFilter = home.clickOnTableFilterLinkHeader()
        tableFilter.isReady()
      })
    )

    qase(
      [32],
      it('[32, WEB] should visit the web and click on the Table Sort & Search Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const tableSortAndSearch = home.clickOnTableSortAndSearchLinkHeader()
        tableSortAndSearch.isReady()
      })
    )

    qase(
      [33],
      it('[33, WEB] should visit the web and click on the Table Data Download Link', function () {
        cy.viewport(key, value)
        console.log(`Viewport size: ${key} x ${value}`)
        home.visit()
        home.isReady()
        home.closePopUp()
        const tableDataDownload = home.clickOnTableDataDownloadLinkHeader()
        tableDataDownload.isReady()
      })
    )
  }
})
