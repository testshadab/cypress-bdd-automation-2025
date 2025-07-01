/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/loginLocatorPage";
import { HRMLoginPage } from "../pages/hrmloginLocatorPage";

let credentials;
let invalData = 'Invalid credentials';
let reqErrorMsg = 'Required';


const loginPageLoc = new LoginPage();

before(() => {
    cy.fixture(`${Cypress.env('env')}/credentials.json`).then((creds) => {
        credentials = creds;
        cy.log('Credentials loaded:', JSON.stringify(credentials));
    });
});

Given("the user navigates to the login page", () => {
    const currentEnv = Cypress.env('env');
    cy.log('Current Environment :- ', currentEnv);
    cy.visit(credentials.orangehrmUrl);
    cy.title().should('include', 'OrangeHRM');
});

When("the user enters valid username and password", () => {
    HRMLoginPage.login(credentials.hrmUserName, credentials.hrmPassword);
});

When("clicks the login button", () => {
    HRMLoginPage.loginCTA();
});

Then("the user should be redirected to the dashboard", () => {
    HRMLoginPage.profilePicture();
});

When("the user enters an invalid username and valid password", () => {
    HRMLoginPage.login(credentials.invalidhrmUserName, credentials.hrmPassword);
});

Then("an error message should be displayed", () => {
    HRMLoginPage.invalidPasswordErrorMsg(invalData);
});

When("the user enters a valid username and invalid password", () => {
    HRMLoginPage.login(credentials.hrmUserName, credentials.invalidhrmPassword);
});

When("the user leaves both username and password fields blank", () => {
    HRMLoginPage.loginWithoutUsernameAndPassword();
});

Then("validation messages should be displayed", () => {
    HRMLoginPage.requiredErrorMsg(reqErrorMsg);
});

When("the user leaves the username field blank and enters a valid password", () => {
    HRMLoginPage.login(credentials.nullVal, credentials.hrmPassword);
});

Then("a validation message for username should be displayed", () => {
    HRMLoginPage.requiredUsernameErrorMsg(reqErrorMsg);
});

When("the user enters a valid username and leaves the password field blank", () => {
    HRMLoginPage.login(credentials.nullVal, credentials.hrmPassword);
});

Then("a validation message for password should be displayed", () => {
    HRMLoginPage.requiredUsernameErrorMsg(reqErrorMsg);
});

