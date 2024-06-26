import { defineConfig } from 'cypress';
import { mergeConfigWithConfigFromFile } from './cypress/config/setup-node-events/mergeConfigWithConfigFromFile';

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  projectId: 'iyhpy5',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'cypress/config/reporter-config.json',
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  screenshotsFolder: 'report/screenshots',
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  e2e: {
    testIsolation: true,
    setupNodeEvents(on, config) {
      const newConfig = mergeConfigWithConfigFromFile(config);
      console.info('\n> Cypress config:\n', newConfig);
      return newConfig;
    },
    specPattern: 'cypress/e2e/**/*.ts',
  },
});
