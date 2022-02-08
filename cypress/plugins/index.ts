/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const fs = require('fs-extra');
const path = require('path');

/**
 * Method to get the configuration files for each environment.
 * Documentation: https://docs.cypress.io/api/plugins/configuration-api.html#Switch-between-multiple-configuration-files
 */
function getConfigurationByFile(file: string) {
  const pathToConfigFile = path.resolve(__dirname, '../config', `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
module.exports = (on: CallableFunction, config: { env: { configFile: string } }) => {
  // accept a configFile value or use local by default
  const file = config.env.configFile || 'qa';
  console.info('\n> Cypress config:', config);

  return getConfigurationByFile(file);
};
