/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
const specTitle = require("cypress-sonarqube-reporter/specTitle");

describe(specTitle('API PATCH 200 Request'), function () {
    qase([14],
    it('should get a 200 response after a PATCH request to update the user data', function() {
        cy.request({
            method: 'PATCH',
            url: env.apiURL + '/api/users/2', 
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).property('name').to.equal('morpheus');
            expect(response.body).property('job').to.equal('zion resident');
            expect(response.body).have.property('updatedAt');
        });
    }));
});
