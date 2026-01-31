Feature: Orange HRM Login and Navigation

  As a user I want to log in and navigate the Orange HRM app
  so that I can verify authentication and main flows work correctly.

  Background:
    Given I visit the website

  Scenario Outline: Valid login shows dashboard
    When I log in with username "<username>" and password "<password>"
    Then I should see the dashboard

    Examples:
      | username | password  |
      | Admin    | admin123  |

  Scenario Outline: Time menu navigates to Timesheet page
    When I log in with username "<username>" and password "<password>"
    And I should see the dashboard
    And I click on "Time" in the menu
    Then I should see the Timesheet page

    Examples:
      | username | password  |
      | Admin    | admin123  |

  Scenario Outline: Invalid credentials show validation error
    When I log in with username "<username>" and password "<password>"
    Then I should see a validation error

    Examples:
      | username          | password  |
      | wrongcredentials  | admin123  |
      | invalidaccount    | admin123  |
