#  Playwright-Framework
A scalable, maintainable, and fast end-to-end (E2E) test automation framework powered by Microsoft Playwright. Includes support for parallel execution, cross-browser testing, Allure reporting, and Excel-based test data management.

Here is the project Structure:
.
├── tests/                     # Test specifications
├── playwright.config.js       # Playwright configuration
├── package.json               # Dependencies & scripts
├── package-lock.json
└── .gitignore

# Installation

Make sure you have Node.js 18+ installed.

npm install

Install Playwright browsers (if not already installed):

npx playwright install

# Run the full E2E suite:

npm run test:e2e[defined in package.json]

# Browser Configuration

By default, the framework runs tests on Chromium:

projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
]


You can activate other browsers by uncommenting them in playwright.config.js:

Firefox

WebKit (Safari)

Mobile devices (Pixel, iPhone)

Branded browsers (Microsoft Edge, Chrome)

# Test Tracing & Debugging

This framework captures Playwright trace files on first retry, making debugging much easier:

trace: 'on-first-retry'


Open a trace:

npx playwright show-trace trace.zip

# Allure Reporting

Allure is already integrated using:

['allure-playwright']


Generate and view reports:

npx allure generate allure-results --clean
npx allure open

# 📁 Excel Test Data (ExcelJS)

ExcelJS is available for reading/writing Excel files:

import ExcelJS from 'exceljs';


Useful for data-driven test scenarios.

# 🚫 Ignored Files

From .gitignore, these are excluded from Git tracking:

node_modules/
test-results/
playwright-report/
blob-report/
playwright/.cache/
playwright/.auth/

