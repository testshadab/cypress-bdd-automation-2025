/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/loginLocatorPage";

let credentials;

const loginPageLoc = new LoginPage();

before(() => {
    cy.fixture(`${Cypress.env('env')}/credentials.json`).then((creds) => {
        credentials = creds;
        cy.log('Credentials loaded:', JSON.stringify(credentials));
    });
});

Given('Navigate to the application', () => {
    const currentEnv = Cypress.env('env');
    cy.log('Current Environment :- ', currentEnv);
    cy.visit(credentials.baseUrl);
    cy.title().should('include', 'Home Page');
})

When('Enter the signin credentials', function () {
    LoginPage.login(credentials.email, credentials.password);
})

Then('Validate the logout CTA', function () {
    loginPageLoc.verifyLogoutCTA();

})