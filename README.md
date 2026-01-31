# UI Test Automation Demo

End-to-end UI test automation using **Cypress** with **Cucumber** (BDD) for the Orange HRM demo application.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended) — [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

## Clone the Repository

```bash
git clone <your-repo-url>
cd "UI Test Automation Demo"
cd PaoloCypressUITest
```

## Installation

1. Navigate to the Cypress project folder:

   ```bash
   cd PaoloCypressUITest
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Setup

The tests run against the public **Orange HRM demo** site (`https://opensource-demo.orangehrmlive.com`). No API keys or environment configuration are required.

### Test Data

Test credentials and configuration are stored in:

- `cypress/fixtures/testData.json`

You can customize the base URL, users, and credentials there if needed. The default valid credentials are:

- **Username:** `Admin`
- **Password:** `admin123`

## Running the Tests

### Interactive Mode (recommended for development)

Opens the Cypress Test Runner UI so you can select and run tests:

```bash
npm run cy:open
```

### Headless Mode (for CI/terminal)

Runs all tests in the terminal without opening a browser:

```bash
npm run cy:run
```

### Run specific feature file

```bash
npx cypress run --spec "cypress/integration/example.feature"
```

## Project Structure

```
PaoloCypressUITest/
├── cypress/
│   ├── fixtures/           # Test data (e.g. testData.json)
│   ├── integration/        # Cucumber feature files (*.feature)
│   ├── plugins/            # Cypress plugins
│   ├── screenshots/        # Failure screenshots
│   └── support/
│       ├── commands.ts     # Custom Cypress commands
│       ├── e2e.ts          # Global support file
│       ├── selectors.ts    # Page element selectors
│       ├── fixtureTypes.ts # TypeScript types for fixtures
│       └── step_definitions/  # Cucumber step definitions
├── cypress.config.ts       # Cypress configuration
├── package.json
└── tsconfig.json
```

## Tech Stack

- **Cypress** — E2E testing framework
- **Cucumber** (`@badeball/cypress-cucumber-preprocessor`) — BDD/Gherkin syntax
- **TypeScript** — Type-safe step definitions and support files
- **esbuild** — Fast bundling for Cucumber preprocessor

## Writing Tests

1. **Feature files** — Add `.feature` files in `cypress/integration/` using Gherkin syntax.
2. **Step definitions** — Add or update step definitions in `cypress/support/step_definitions/`.
3. **Selectors** — Centralize selectors in `cypress/support/selectors.ts`.
4. **Test data** — Store reusable data in `cypress/fixtures/`.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Tests fail to load | Run `npm install` again and ensure Node.js is v18+ |
| Cypress won't open | Try `npx cypress verify` to check installation |
| Step not found | Ensure step definitions match the Gherkin text exactly |
| Site unreachable | Check internet connection; Orange HRM demo must be accessible |

## License

See the repository license file for details.
