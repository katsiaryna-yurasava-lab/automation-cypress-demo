const {defineConfig} = require("cypress");

module.exports = defineConfig({
    defaultCommandTimeout: 10000,
    retries: { runMode: 2, openMode: 0 },
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
    screenshots: false,
    env: {
        "apiBaseUrl": "https://airportgap.com/api/"
    },
    e2e: {
        baseUrl: 'https://www.saucedemo.com',
        specPattern: 'cypress/tests/**/*.cy.{js,ts,jsx,tsx}',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    projectId: "excciq"
});
