# Cypress Automation Demo

A minimal Cypress test project showcasing UI (Sauce Demo) and API testing, using the Page Object pattern and fixtures.

## Prerequisites
- Node.js 16+ (LTS recommended)
- npm 8+

## Install
```bash
npm ci
```

## Project structure
```text
automation-cypress-demo\
  - cypress\
    - api-tests\
    - downloads\
    - fixtures\
      - airports.json
      - login-credentials.json
      - products-data.json
    - page-objects\
      - login.page.js
      - product.page.js
     - service\
      - airport.api.js
    - tests\
      - api-tests\
        - api-tests.spec.cy.js
      - e2e\
        - sauce-demo.spec.cy.js
  - cypress.config.js
  - package.json
  - README.md
```

## Running tests

Via npm scripts:
```bash
# Open interactive Cypress runner
npm run cy:open

# Run all tests headlessly
npm run cy:run

# Run only e2e UI tests
npm run test:e2e

# Run only API tests
npm run test:api

# CI-friendly headless run (Chrome)
npm run test:ci
```

Via Cypress CLI:
```bash
# Single spec
npx cypress run --spec cypress/tests/e2e/sauce-demo.spec.cy.js

# By pattern
npx cypress run --spec "cypress/tests/api-tests/**/*.cy.*"

# Open GUI
npx cypress open
```


## Configuration
Key settings live in `cypress.config.js`:
- baseUrl: https://www.saucedemo.com
- retries: { runMode: 2, openMode: 0 }
- viewportWidth/Height: 1280x800
- video/screenshots: disabled by default (toggle for CI needs)

Update as needed for your environment.

## Writing tests
- Put UI specs under `cypress/tests/e2e/` and API specs under `cypress/tests/api-tests/`.
- Use Page Objects from `cypress/page-objects` for readability and reuse.



## Recording to Cypress Cloud (Report Portal)
To see runs in the public report portal, record your test runs to Cypress Cloud.

- Public portal: [Cypress Cloud runs for this project](https://cloud.cypress.io/projects/excciq/runs)
- `projectId` is already configured as `excciq` in `cypress.config.js`.
- You need a Cypress Cloud record key to upload runs. Ask a maintainer for the key or set `CYPRESS_RECORD_KEY` in CI.

Run examples:

```bash
# Bash / macOS / Linux
export CYPRESS_RECORD_KEY="<your-record-key>"
npx cypress run --record --key "$CYPRESS_RECORD_KEY"

# Record only UI e2e tests
npx cypress run --record --key "$CYPRESS_RECORD_KEY" --spec 'cypress/tests/e2e/**/*.cy.*'

# Record only API tests
npx cypress run --record --key "$CYPRESS_RECORD_KEY" --spec 'cypress/tests/api-tests/**/*.cy.*'

# Optional: add tags and choose browser
npx cypress run --record --key "$CYPRESS_RECORD_KEY" --browser chrome --tag "ci,smoke"
```

```powershell
# Windows PowerShell
$env:CYPRESS_RECORD_KEY = "<your-record-key>"
npx cypress run --record --key $env:CYPRESS_RECORD_KEY

# Record only UI e2e tests
npx cypress run --record --key $env:CYPRESS_RECORD_KEY --spec 'cypress/tests/e2e/**/*.cy.*'

# Record only API tests
npx cypress run --record --key $env:CYPRESS_RECORD_KEY --spec 'cypress/tests/api-tests/**/*.cy.*'

# Optional: add tags and choose browser
npx cypress run --record --key $env:CYPRESS_RECORD_KEY --browser chrome --tag "ci,smoke"
```

After the run finishes, open the portal to view results: https://cloud.cypress.io/projects/excciq/runs

## Troubleshooting
- Clear node_modules and lockfile if dependency issues persist: `rm -rf node_modules package-lock.json && npm ci`.
- Ensure site under baseUrl is reachable from your network.
- Increase defaultCommandTimeout for slow environments if needed.

## License
MIT

