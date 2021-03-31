/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env()
import { qase } from 'cypress-qase-reporter/dist/mocha'

describe('API DELETE 200 Request', function () {
  qase(
    [15],
    it('[15, API] should get a 204 response after a DELETE request to delete a user', function () {
      cy.request({
        method: 'DELETE',
        url: env.apiURL + '/api/users/2'
      }).then((response) => {
        expect(response.status).to.eq(204)
      })
    })
  )
})
