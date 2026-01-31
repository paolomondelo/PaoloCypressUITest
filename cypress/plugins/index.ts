// Legacy: This file is not used when setupNodeEvents is defined in cypress.config.ts.
// If you need this plugin, install: npm i -D cypress-cucumber-preprocessor
const cucumber = (require("cypress-cucumber-preprocessor") as { default: () => unknown })
  .default;

export default (on: Cypress.PluginEvents, _config: Cypress.PluginConfigOptions): void => {
  (on as (event: string, handler: unknown) => void)("file:preprocessor", cucumber());
};
