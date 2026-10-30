const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 30000,
    chromeWebSecurity: false,
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false
  },
});
