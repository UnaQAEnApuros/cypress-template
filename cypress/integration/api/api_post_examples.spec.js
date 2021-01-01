/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
const specTitle = require("cypress-sonarqube-reporter/specTitle");

describe(specTitle('API POST 200 Request'), function () {
    qase([8],
    it('should get a 201 response after a POST request to create a new user', function() {
        cy.request({
            method: 'POST',
            url: env.apiURL + '/api/users', 
            body: {
                "name": "Estefania",
                "job": "QA Automation Engineer"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).property('name').to.equal('Estefania');
            expect(response.body).property('job').to.equal('QA Automation Engineer');
            expect(response.body).have.property('id');
            expect(response.body).have.property('createdAt');
        });
    }));

    qase([9],
    it('should get a 200 response after a POST request to register a new user successfully', function() {
        cy.request({
            method: 'POST',
            url: env.apiURL + '/api/register', 
            body: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).have.property('id');
            expect(response.body).have.property('token');
        });
    }));

    qase([11],
    it('should get a 200 response after a POST request to login with a user successfully', function() {
        cy.request({
            method: 'POST',
            url: env.apiURL + '/api/login', 
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).property('token').to.eq('QpwL5tke4Pnpja7X4');
        });
    }));
});

describe(specTitle('API POST 4xx Request'), function () {

    qase([10],
    it('should get a 400 response after a POST request to register a new user without a password set unsuccessfully', function() {
        cy.request({
            method: 'POST',
            url: env.apiURL + '/api/register', 
            body: {
                "email": "sydney@fife"
            },
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).property('error').to.eq('Missing password');
        });
    }));

    qase([12],
    it('should get a 400 response after a POST request to login with a user without a password set unsuccessfully', function() {
        cy.request({
            method: 'POST',
            url: env.apiURL + '/api/login', 
            body: {
                "email": "peter@klaven"
            },
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).property('error').to.eq('Missing password');
        });
    }));
});