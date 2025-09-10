const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        specPattern: 'cypress/tests/**/*.cy.{js,ts,jsx,tsx}',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    }
});
