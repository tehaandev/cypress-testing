module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://practice.expandtesting.com",
    testIsolation: false,
  },

  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 10000,
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportWidth: 800,
};

