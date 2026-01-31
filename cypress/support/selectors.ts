/**
 * Centralized selectors for maintainability.
 * Update here when the UI changes instead of hunting through step definitions.
 */
export const selectors = {
  login: {
    username: 'input[name="username"]',
    password: 'input[name="password"]',
    submitButton: 'button[type="submit"]',
  },
  actions: {
    fullName: ".action-full-name",
    email: ".action-email",
  },
  /** Orange HRM uses .oxd-alert; fallbacks for other apps. */
  validation: {
    error: '.oxd-alert, .error, .invalid-feedback, [role="alert"]',
  },
} as const;
