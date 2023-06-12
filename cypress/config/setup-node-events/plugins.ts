import { TestExecutionResult } from 'cypress-debugger';
const { debuggerPlugin } = require('cypress-debugger');
import '@bahmutov/cy-api/support';
import '@testing-library/cypress/add-commands';
import 'pretty-console-colors';
import '@testing-library/cypress/add-commands';
import 'cypress-xpath';

/**
 * The collection of plugins to use with Cypress
 * @param on  `on` is used to hook into various events Cypress emits
 * @param config  `config` is the resolved Cypress config
 */
export const plugins = (on: Cypress.PluginEvents): Cypress.PluginConfigOptions => ({
  ...debuggerPlugin(on, {
    meta: { key: 'value' },
    callback: (path: string, data: TestExecutionResult) => console.info('\t🎥 Trace file %s', data, path)
  })
});
