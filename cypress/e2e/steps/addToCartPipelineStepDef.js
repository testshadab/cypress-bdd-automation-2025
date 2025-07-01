/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AddToCartPage } from "../pages/addToCartLocatorPage";

let credentials;
let testData;

const addToCartPage = new AddToCartPage();

before(() => {
    cy.fixture(`${Cypress.env('env')}/credentials.json`).then((creds) => {
        credentials = creds;
        cy.log('Credentials loaded:', JSON.stringify(credentials));
    });

    cy.fixture('testData').then((data) => {
        cy.wrap(testData).as('testData');
        testData = data;
        cy.log('Test data loaded:', testData);
    });
});

Given('I am on the product page with wrong assertion', () => {
    const currentEnv = Cypress.env('env');
    cy.log('Current Environment :- ', currentEnv);
    cy.visit(credentials.baseUrl);
    cy.title().should('include', 'Home Page');
})

When('Select the {string} bag', function (bagText) {
    addToCartPage.selectBag();
    addToCartPage.clickOnBagByTextEle(bagText);
})

Then('Validate the {int} and order summary', function (bagAmount) {
    addToCartPage.verifyTheBagPrice(bagAmount);
    addToCartPage.verifyAddToCartItem();
    addToCartPage.verifyOrderSummary();
})