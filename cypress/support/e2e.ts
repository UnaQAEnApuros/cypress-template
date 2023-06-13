import { debuggerSupport } from 'cypress-debugger';

import './commands';
import 'cypress-xpath';
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
