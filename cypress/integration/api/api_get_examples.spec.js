/* global cy, Cypress */
/// <reference types="Cypress" />
const env = Cypress.env();

describe('API GET 200 Request', function () {
    it('should get a 200 response after a GET request for the complete list of users', function() {
        cy.request({
            method: 'GET',
            url: env.apiURL + '/api/users?page=2'
        })
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).property('page').to.equal(2);
            expect(response.body).property('per_page').to.equal(6);
            expect(response.body).property('total').to.equal(12);
            expect(response.body).property('total_pages').to.equal(2);
            expect(response.body).property('data');
            expect(response.body).property('ad');
        });
    });

    it('should get a 200 response after a GET request for a single user', function() {
        cy.request({
            method: 'GET',
            url: env.apiURL + '/api/users/2'
        })
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).property('data');
            expect(response.body.data).property('id').to.equal(2);
            expect(response.body.data).property('email').to.equal('janet.weaver@reqres.in');
            expect(response.body.data).property('first_name').to.equal('Janet');
            expect(response.body.data).property('last_name').to.equal('Weaver');
            expect(response.body.data).property('avatar').to.equal('https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg');
            
            expect(response.body).property('ad');
            expect(response.body.ad).property('company').to.equal('StatusCode Weekly');
            expect(response.body.ad).property('url').to.equal('http://statuscode.org/');
            expect(response.body.ad).property('text').to.equal('A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things.');
        });
    });
});