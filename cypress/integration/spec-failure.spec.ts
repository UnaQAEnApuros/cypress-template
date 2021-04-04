/* global cy, Cypress */
/// <reference types="Cypress" />

describe('Fail Tests', function () {
  it('[] should fail', function () {
    expect(false).to.be.true
  })
})
