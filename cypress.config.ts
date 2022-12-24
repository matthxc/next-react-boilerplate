import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: '__tests__/integration/e2e/fixtures',
  screenshotsFolder: '__tests__/integration/e2e/screenshots',
  videosFolder: '__tests__/integration/e2e/videos',
  videoCompression: 0,
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
      return config;
    },
    baseUrl: 'http://localhost:3000',
    specPattern: '__tests__/integration/e2e/tests/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: '__tests__/integration/e2e/support/index.js',
  },
  experimentalWebKitSupport: true,
});
