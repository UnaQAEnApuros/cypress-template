import * as customCommands from '../commands';
Cypress.Commands.addAll(customCommands);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { onFailHandler } from 'cypress-diff';

Cypress.on('fail', (error, runnable) => {
  onFailHandler(error, runnable);
});

/**
 * @description Method to avoid a failure on the tests due to uncaught exceptions.
 * More info here: https://docs.cypress.io/guides/references/error-messages.html#Uncaught-exceptions-from-your-application
 */
Cypress.on('uncaught:exception', () => false);
