
const LoginPageLocators = {
    companyBrand: "img[alt='company-branding']",
    email: "input[name='username']",
    password: "input[name='password']",
    loginCTA: "button[type='submit']",
    profilePicture: "img[alt='profile picture']",
    invalidPasswoErrorMsg: "p[class*='oxd-alert-content-text']",
    usernameRequiredErrorMsg: "//label[text()='Username']/ancestor::div[contains(@class, 'oxd-form-row')]//span[contains(@class, 'oxd-input-field-error-message')]",
    passwordRequiredErrorMsg: "//label[text()='Password']/ancestor::div[contains(@class, 'oxd-form-row')]//span[contains(@class, 'oxd-input-field-error-message')]",

}

export class HRMLoginPage {

    static login(username, password) {
        cy.get(LoginPageLocators.companyBrand).should('be.visible');
        cy.get(LoginPageLocators.email).type(username);
        cy.get(LoginPageLocators.password).type(password);
    }

    static loginCTA() {
        cy.get(LoginPageLocators.loginCTA).click();
    }

    static profilePicture() {
        cy.get(LoginPageLocators.profilePicture).should("be.visible");
    }

    static invalidPasswordErrorMsg(expectedText) {
        // debugger;
        // cy.pause()
        cy.get(LoginPageLocators.invalidPasswoErrorMsg)
            .should("be.visible")
            .invoke('text')
            .then((actualText) => {
                expect(actualText.trim()).to.eq(expectedText);
            });
    }

    static loginWithoutUsernameAndPassword() {
        cy.get(LoginPageLocators.companyBrand).should('be.visible');
    }

    static requiredUsernameErrorMsg(errorMsg) {
        cy.xpath(LoginPageLocators.usernameRequiredErrorMsg).should("be.visible").invoke('text').then((actualText) => {
            expect(actualText.trim()).to.eq(errorMsg);
        });
    }

    static requiredPasswordErrorMsg(errorMsg) {
        cy.xpath(LoginPageLocators.passwordRequiredErrorMsg).should("be.visible").invoke('text').then((actualText) => {
            expect(actualText.trim()).to.eq(errorMsg);
        });
    }




}