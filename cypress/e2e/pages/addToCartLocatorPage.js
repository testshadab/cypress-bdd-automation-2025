export class AddToCartPage {

    gearMenu() {
        return cy.xpath('//span[text()="Gear"]/ancestor::li')
    }

    bags() {
        return cy.xpath('//span[text()="Bags"]/parent::a')
    }

    bagsHeading() {
        return cy.get('span[data-ui-id="page-title-wrapper"]')
    }

    bagsList() {
        return cy.get('strong[class*="product-item-name"] a')
    }

    bagPrice() {
        return cy.xpath('(//span[@class="price"])[1]')
    }

    addedProductName() {
        return cy.get('span[data-ui-id="page-title-wrapper"]')
    }

    addToCartCTA() {
        return cy.get('button[id="product-addtocart-button"]')
    }

    successMsg() {
        return cy.get('div[data-ui-id="message-success"]')
    }

    myCart() {
        return cy.get('div[class="minicart-wrapper"] > a')
    }

    proceedToCheckout() {
        return cy.get('button[title="Proceed to Checkout"]')
    }

    orderSummary() {
        return cy.get('span[class="title"]')
    }


    selectBag() {
        cy.wait(2000);
        this.gearMenu().trigger('mouseover');
        this.bags().click();
        this.bagsHeading().should('be.visible');
    }

    clickOnBagsByText(text) {
        this.bagsList().each(($el) => {
            if ($el.innerText.includes(text)) {
                cy.wrap($el).click();
            }
        });
    }

    clickOnBagByTextEle(text) {
        return this.bagsList().contains(text).click();
    }

    verifyTheBagPrice(amount) {
        this.bagPrice().invoke('text').then((text) => {
            const price = Number(text.replace(/[^0-9.-]+/g, ""));
            cy.log(price);
            expect(price).to.equal(amount);
        });
    }

    verifyAddToCartItem() {
        cy.wait(2000);
        this.addToCartCTA().click();
        this.successMsg().should('be.visible');
        this.myCart().click();
        cy.wait(2000);
        this.proceedToCheckout().click();
    }

    verifyOrderSummary() {
        cy.wait(8000);
        this.orderSummary().should('be.visible');
    }


}