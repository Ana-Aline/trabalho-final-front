import { CartElements } from './elements/cart.elements';
import { MESSAGES } from '../data/messages';


export class CartPage {
    proceedToCheckout() {
        cy.get(CartElements.proceedToCheckoutButton)
          .scrollIntoView()
          .should('be.visible')
          .click();
    }

    fillPaymentDetails(cardData) {
        cy.get(CartElements.nameOnCardInput).type(cardData.nameOnCard);
        cy.get(CartElements.cardNumberInput).type(cardData.cardNumber);
        cy.get(CartElements.cvcInput).type(cardData.cvc);
        cy.get(CartElements.expiryMonthInput).type(cardData.expirationMonth);
        cy.get(CartElements.expiryYearInput).type(cardData.expirationYear);
    }

    submitePaymentDetails() {
        cy.get(CartElements.payButton)
          .should('be.visible')
          .click();
    }
    addCommentAndPlaceOrder(comment) {
        cy.get(CartElements.commentTextArea).type(comment);
        cy.get(CartElements.placeOrderButton)
            .scrollIntoView()
            .should('be.visible')
            .click();
    }
    
    verifyOrderSuccess() {
        cy.get(CartElements.successOrderMessage)
            .should('be.visible')
            .and('contain', MESSAGES.ORDER_SUCCESS);
    }
}