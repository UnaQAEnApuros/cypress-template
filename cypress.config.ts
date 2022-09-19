import { defineConfig } from 'cypress';
const setupNodeEvents = require('./cypress/plugins/index.ts');

export default defineConfig({
  watchForFileChanges: false,
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000,
  screenshotsFolder: 'mochawesome-report/assets',
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
    openMode: 0
  },
  pageLoadTimeout: 60000,
  projectId: 'iyhpy5',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'cypress/config/reporter-config.json'
  },
  e2e: {
    setupNodeEvents,
    supportFile: 'cypress/support/commands.ts',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalWebKitSupport: true
  }
});
