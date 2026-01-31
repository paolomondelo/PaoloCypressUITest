import { selectors } from "./selectors";

/**
 * Log in with username and password. Assumes login page is already loaded.
 * Returns the chain for optional further chaining.
 */
Cypress.Commands.add("login", (username: string, password: string) => {
  cy.get(selectors.login.username).should("be.visible").clear().type(username);
  cy.get(selectors.login.password).should("be.visible").clear().type(password);
  cy.get(selectors.login.submitButton).click();
});
