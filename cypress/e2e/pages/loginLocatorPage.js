
const LoginPageLocators = {
    signInCTA: ".panel > .header > .authorization-link > a",
    email: "[id='email']",
    password: "[name='login[password]']",
    loginCTA: "[class*='login primary']",
    loggedUserName: ":nth-child(2) > .greet > .logged-in",
    dropdownMenu: ":nth-child(2) > .customer-welcome > .customer-name > .action",
    signOutCTA: "(//li[@class='authorization-link']//following-sibling::a)[1]"
}

export class LoginPage {

    static login(username, password) {
        cy.get(LoginPageLocators.signInCTA).should('be.visible');
        cy.get(LoginPageLocators.signInCTA).click({ force: true });
        cy.get(LoginPageLocators.email).type(username);
        cy.get(LoginPageLocators.password).type(password);
        cy.get(LoginPageLocators.loginCTA).click();
    }

    verifyLogoutCTA() {
        cy.wait(10000);
        // cy.get(LoginPageLocators.loggedUserName).should('have.text', 'Welcome, Test F Test L!');
        cy.get(LoginPageLocators.dropdownMenu).click();
        cy.xpath(LoginPageLocators.signOutCTA).should('be.visible');
    }

}