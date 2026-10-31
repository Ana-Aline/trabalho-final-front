const { defineConfig } = require("cypress");
import { allureCypress } from "allure-cypress/reporter";

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {
      allureCypress(on, config,{
        resultsDir: "allure-results",
      });
      return config;
    },
    video: false
  },
});
