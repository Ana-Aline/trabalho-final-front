import { CartElements } from './elements/cart.elements';
import { MESSAGES } from '../data/messages';


export class CartPage {
    proceedToCheckout() {
        cy.get(CartElements.proceedToCheckoutButton).click();
    }

    fillPaymentDetails(cardData) {
        cy.get(CartElements.nameOnCardInput).type(cardData.nameOnCard);
        cy.get(CartElements.cardNumberInput).type(cardData.cardNumber);
        cy.get(CartElements.cvcInput).type(cardData.cvc);
        cy.get(CartElements.expiryMonthInput).type(cardData.expirationMonth);
        cy.get(CartElements.expiryYearInput).type(cardData.expirationYear);
        cy.get(CartElements.payButton).click();
    }

    submitePaymentDetails() {
        cy.get(CartElements.payButton).click();
    }

    verifyOrderSuccess() {
        cy.get(CartElements.successOrderMessage)
            .should('be.visible')
            .and('contain', MESSAGES.ORDER_SUCCESS);
    }
}