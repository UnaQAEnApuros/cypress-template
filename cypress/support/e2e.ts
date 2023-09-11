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

import 'cypress-xpath';
import 'pretty-console-colors';

const { debuggerSupport } = require('cypress-debugger');
debuggerSupport();

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath');
require('mochawesome/addContext');

const addContext = require('mochawesome/addContext'); // add failed screenshot to mochawesome report

Cypress.on('test:after:run', (test, runnable) => {
  // TODO: This is a mochawesome problem, that's why we skip those errors.
  if (test.state === 'failed') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Object is possibly 'undefined'.
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Type 'ObjectLike' is not assignable to type 'Runnable'.
    addContext({ test }, `screenshots/${Cypress.spec.name}/${screenshotFileName}`);
  }
});

/**
 * @description Method to avoid a failure on the tests due to uncaught exceptions.
 * More info here: https://docs.cypress.io/guides/references/error-messages.html#Uncaught-exceptions-from-your-application
 */
Cypress.on('uncaught:exception', () => false);

/** Debugger Plugin by Sorry Cypress. 
// https://github.com/currents-dev/cypress-debugger
*/
debuggerSupport();
