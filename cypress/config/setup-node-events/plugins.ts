const { TestExecutionResult } = require('cypress-debugger');
const { debuggerPlugin } = require('cypress-debugger');

/**
 * The collection of plugins to use with Cypress
 * @param on  `on` is used to hook into various events Cypress emits
 * @param config  `config` is the resolved Cypress config
 */
export const plugins = (on: Cypress.PluginEvents): Cypress.PluginConfigOptions => ({
  ...debuggerPlugin(on, {
    meta: { key: 'value' },
    callback: (path: string, data: typeof TestExecutionResult) => {
      console.info('\t🎥 Trace file %s', data, path);
    },
    failedTestsOnly: true,
    targetDirectory: 'cypress/report/debugger'
  })
});
