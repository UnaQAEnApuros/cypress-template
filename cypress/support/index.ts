// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// @ts-check

import './commands';
import '@bahmutov/cy-api/support';
import '@testing-library/cypress/add-commands';
import 'cypress-wait-until';
import 'pretty-console-colors';
import 'cypress-wait-until';

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath');
require('mochawesome/addContext');
require('@cypress/skip-test/support')

const addContext = require('mochawesome/addContext'); // add failed screenshot to mochawesome report

Cypress.on('test:after:run', (test, runnable) => {
	if (test.state === 'failed') {
	  	const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
		addContext({ test }, `assets/${Cypress.spec.name}/${screenshotFileName}`)
	}
});

/**
 * Method to avoid a failure on the tests due to uncaught exceptions.
 * More info here: https://docs.cypress.io/guides/references/error-messages.html#Uncaught-exceptions-from-your-application
 */
Cypress.on('uncaught:exception', () => false);


