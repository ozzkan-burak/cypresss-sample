const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://checkout.flo.com.tr/login",
  },
  chromeWebSecurity:false,

  retries: 1,
  screenshotsFolder:"./cypress-sample/screenshots",
});
