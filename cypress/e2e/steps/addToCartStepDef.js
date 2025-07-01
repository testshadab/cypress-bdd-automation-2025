/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AddToCartPage } from "../pages/addToCartLocatorPage";

let credentials;
let testData;

const addToCartPage = new AddToCartPage();

before(() => {
    cy.fixture(`${Cypress.env('env')}/credentials.json`).then((creds) => {
        //   cy.wrap(credentials).as('credentials');
        credentials = creds;
        cy.log('Credentials loaded:', JSON.stringify(credentials));
    });

    cy.fixture('testData').then((data) => {
        cy.wrap(testData).as('testData');
        testData = data;
        cy.log('Test data loaded:', testData);
    });
});

Given('I am on the product page', () => {
    const currentEnv = Cypress.env('env');
    cy.log('Current Environment :- ', currentEnv);
    cy.visit(credentials.baseUrl);
    cy.title().should('include', 'Home Page');
})

When('I click on the Add to cart button', function () {
    addToCartPage.selectBag();
    const bagText = testData.bagText;
    addToCartPage.clickOnBagByTextEle(bagText);
})

Then('Validate the order summary', function () {
    const amount = testData.bagAmount;
    addToCartPage.verifyTheBagPrice(amount);
    addToCartPage.verifyAddToCartItem();
    addToCartPage.verifyOrderSummary();
})