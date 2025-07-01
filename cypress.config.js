const { defineConfig } = require('cypress');
const path = require('path');

const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    projectId: "ozirsd", //Project ID of cypress dashboard cloud run.
    setupNodeEvents,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
    env: {
      env: 'dev', // Default environment
    },
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
    specPattern: 'cypress/e2e/features/*.feature',
    videosFolder: 'cypress/videos',
    viewportWidth: 1519.2,
    viewportHeight: 677,
    screenshotsFolder: 'cypress/screenshots',
    screenshotOnRunFailure: true, // Takes screenshots for failed tests only
    videoUploadOnPasses: false, // Uploads videos only for failed tests
    // retries: {
    //   runMode: 1,
    //   openMode: 1
    // },
    video: true,
  },
});
