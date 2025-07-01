# 🧪 Cypress BDD Automation Framework 2025

A modern end-to-end test automation framework using **Cypress**, **Cucumber BDD**, **Page Object Model**, and **JavaScript**, with support for multiple environments, data-driven testing, and rich reporting.

---

## Project Structure

LUMA-CYPRESS-BDD-2025/
- │
- ├── cypress/
- │   ├── cucumberReports/                   # Stores Cucumber JSON & HTML report files
- │   ├── downloads/                         # Cypress downloads (e.g. files via browser)
- │   ├── e2e/
- │   │   ├── features/                      # Gherkin Feature files
- │   │   │   ├── addToCart.feature
- │   │   │   ├── addToCartPipeline.feature
- │   │   │   └── login.feature
- │   │   ├── pages/                         # Page Object files
- │   │   │   ├── addToCartLocatorPage.js
- │   │   │   └── loginLocatorPage.js
- │   │   └── steps/                         # Step Definition files
- │   │       ├── addToCartPipelineStepDef.js
- │   │       ├── addToCartStepDef.js
- │   │       └── loginStepDef.js
- │   ├── fixtures/                          # Test data and environment-specific config
- │   │   ├── dev/
- │   │   ├── production/
- │   │   └── testData.json
- │   ├── reports/                           # Custom test execution reports (if any)
- │   ├── screenshots/                       # Auto-captured screenshots on test failures
- │   ├── support/                           # Cypress support commands and hooks
- │   └── videos/                            # Cypress test execution recordings
- ├── node_modules/
- ├── cucumber-html-report.js               # Script to generate Cucumber HTML report
- ├── cucumber-json-formatter.exe           # Binary used for formatting JSON to HTML
- ├── cypress.config.js                     # Cypress configuration file
- ├── package-lock.json
- ├── package.json                          # Project dependencies and scripts

## Setup

1. **Install dependencies:**

   npm install

2. **Run Cypress + Cucumber tests:**

   npm test
   This executes all .feature files in cypress/e2e/features with the Cucumber preprocessor.

## BDD Highlights

- Gherkin .feature files describe scenarios in plain English (Given/When/Then).

- Step definitions connect each step to Cypress code.

- Page Objects encapsulate selectors & interactions.

**Sample Gherkin snippet:**
1. .feature file declares behavior:

Given I open the home page
When I search for "blue denim"
Then I should see results containing "blue denim"

Mapped with step definitions in support/step_definitions.

2. Step definition:

import HomePage from '../pageObjects/HomePage';
Given('I visit the home page', () => {
  HomePage.open();
});

## Configuration

cypress.json example:
{
  "baseUrl": "https://example.com",
  "testFiles": "**/*.feature",
  "video": false
}

And in package.json:
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}

## Running Tests

Headed mode:

npm test

Headless (CI):

npx cypress run
Screenshots are captured automatically on failure and saved under cypress/screenshots.

## Test Report Generation

After executing your test cases, an HTML report is generated using the following command:

npm run posttest

##  Output Location:

The final report is saved here:

/cypress/reports/cucumber-htmlreport.html
You can open this file in any browser to review detailed test execution results.

