const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I visit the website', () => {
  cy.fixture('testData').then((data) => {
    cy.visit(data.baseUrl);
  });
});

Given('I visit the website with test credentials', () => {
  cy.fixture('testData').then((data) => {
    cy.visit(data.baseUrl);
    // Store credentials for later use
    cy.wrap(data.credentials[0]).as('creds');
  });
});

When('I fill in the email with {string}', (email) => {
  cy.get('input[name="username"]').clear().type(email);
});

When('I fill in the name with {string}', (name) => {
  cy.get('.action-full-name').clear().type(name);
});

When('I fill in the password with {string}', (password) => {
  cy.get('input[name="password"]').clear().type(password);
});

When('I click on {string} in the menu', (menuItem) => {
  cy.contains(menuItem).click();
});

When('I try to submit the form without an email', () => {
  cy.contains('Actions').click();
  cy.get('form').submit();
});

When('I click the login button', () => {
  cy.get('button[type="submit"]').click();
});

When('I login with the first test user', () => {
  cy.fixture('testData').then((data) => {
    const creds = data.credentials[0];
    cy.get('input[name="username"]').clear().type(creds.username);
    cy.get('input[name="password"]').clear().type(creds.password);
    cy.get('button[type="submit"]').click();
  });
});

Then('I should see the email filled in', () => {
  cy.get('.action-email').should('not.be.empty');
});

Then('I should see the name filled in', () => {
  cy.get('.action-full-name').should('not.be.empty');
});

Then('I should see the Timesheet page', () => {
  cy.url().should('include', '/viewEmployeeTimesheet');
});

Then('I should see a validation error', () => {
  cy.get('.error, .invalid-feedback, [role="alert"]').should('be.visible');
});

Then('I should see the dashboard', () => {
  cy.url().should('include', '/dashboard');
  cy.contains('Dashboard').should('be.visible');
});
