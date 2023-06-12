import { defineConfig } from 'cypress';
import { plugins } from './cypress/config/setup-node-events/plugins';

//const setupNodeEvents = require('./cypress/plugins/index.ts');

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  projectId: 'iyhpy5',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'cypress/config/reporter-config.json'
  },
  retries: {
    runMode: 2,
    openMode: 0
  },
  screenshotsFolder: 'mochawesome-report/assets',
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on) {
      plugins(on);
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  }
});
