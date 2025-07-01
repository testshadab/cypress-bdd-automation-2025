Feature: Login Functionality for OrangeHRM Application

  Background:
    Given the user navigates to the login page

  @ValidLogin
  Scenario: Login with valid username and password
    When the user enters valid username and password
    And clicks the login button
    Then the user should be redirected to the dashboard

  @InvalidEmail
  Scenario: Login with invalid username and valid password
    When the user enters an invalid username and valid password
    And clicks the login button
    Then an error message should be displayed

  @InvalidPassword
  Scenario: Login with valid username and invalid password
    When the user enters a valid username and invalid password
    And clicks the login button
    Then an error message should be displayed

  @BothFieldsEmpty
  Scenario: Login with blank username and password
    When the user leaves both username and password fields blank
    And clicks the login button
    Then validation messages should be displayed

  @LoginWithBlankUsername
  Scenario: Login with blank username
    When the user leaves the username field blank and enters a valid password
    And clicks the login button
    Then a validation message for username should be displayed

  @LoginWithBlankPassword
  Scenario: Login with blank password
    When the user enters a valid username and leaves the password field blank
    And clicks the login button
    Then a validation message for password should be displayed
