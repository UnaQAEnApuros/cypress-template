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

function getConfigurationByFile(filename) {
	const pathToConfigFile = path.resolve(__dirname, '../config', `${filename}.json`);
	return fs.readJson(pathToConfigFile);
}

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
module.exports = async (on, config) => {
	require('@cypress/code-coverage/task')(on, config)
    on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

	const filename = config.env.configFile || 'qa'
	const customConfig = await getConfigurationByFile(filename);
	config = Object.assign(config, customConfig);
	console.info('\n> Cypress config:', config);
	return config;
};