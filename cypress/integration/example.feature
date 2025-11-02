Feature: Example Feature

  Scenario Outline: Validate that the page should contain example after login
   Given I visit the website
   When I fill in the email with "<username>"
   And I fill in the password with "<password>"
   And I click the login button
   Then I should see the dashboard

    Examples:
      | username          | password     |
      | Admin             | admin123     |

  

   Scenario Outline: Test navigation menu for time page
    Given I visit the website
    When I fill in the email with "<username>"
    And I fill in the password with "<password>"
    And I click the login button
    And I should see the dashboard
    Then I click on "Time" in the menu
    And I should see the Timesheet page

    Examples:
      | username          | password     |
      | Admin             | admin123     |


   Scenario Outline: Verify invalid accounts are not allowed to login
    Given I visit the website
    When I fill in the email with "<username>"
    And I fill in the password with "<password>"
    And I click the login button
    Then I should see a validation error
      Examples:
      | username          | password     |
      | wrongcredentials  | admin123     |
      | invalidaccount    | admin123     |