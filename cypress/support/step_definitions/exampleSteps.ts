import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { selectors } from "../selectors";
import type { TestDataFixture } from "../fixtureTypes";

// --- Given steps ---

Given("I visit the website", () => {
  cy.fixture<TestDataFixture>("testData").then((data) => {
    cy.visit(data.baseUrl);
  });
});

Given("I visit the website with test credentials", () => {
  cy.fixture<TestDataFixture>("testData").then((data) => {
    cy.visit(data.baseUrl);
    cy.wrap(data.credentials[0]).as("creds");
  });
});

// --- When steps ---

When("I log in with username {string} and password {string}", (username: string, password: string) => {
  cy.login(username, password);
});

When("I fill in the email with {string}", (email: string) => {
  cy.get(selectors.login.username).should("be.visible").clear().type(email);
});

When("I fill in the username with {string}", (username: string) => {
  cy.get(selectors.login.username).should("be.visible").clear().type(username);
});

When("I fill in the password with {string}", (password: string) => {
  cy.get(selectors.login.password).should("be.visible").clear().type(password);
});

When("I click the login button", () => {
  cy.get(selectors.login.submitButton).click();
});

When("I click on {string} in the menu", (menuItem: string) => {
  cy.contains(menuItem).click();
});

When("I login with the first test user", () => {
  cy.fixture<TestDataFixture>("testData").then((data) => {
    const creds = data.credentials[0];
    cy.login(creds.username, creds.password);
  });
});

// --- Steps for other features (Actions, etc.) ---

When("I fill in the name with {string}", (name: string) => {
  cy.get(selectors.actions.fullName).should("be.visible").clear().type(name);
});

When("I try to submit the form without an email", () => {
  cy.contains("Actions").click();
  cy.get("form").submit();
});

// --- Then steps ---

Then("I should see the dashboard", () => {
  cy.url().should("include", "/dashboard");
  cy.contains("Dashboard").should("be.visible");
});

Then("I should see the Timesheet page", () => {
  cy.url().should("include", "/viewEmployeeTimesheet");
});

Then("I should see a validation error", () => {
  cy.get(selectors.validation.error, { timeout: 10000 }).should("be.visible");
});

Then("I should see the email filled in", () => {
  cy.get(selectors.actions.email).should("not.be.empty");
});

Then("I should see the name filled in", () => {
  cy.get(selectors.actions.fullName).should("not.be.empty");
});
