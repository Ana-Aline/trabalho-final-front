export class FooterComponent {
  container = '#footer';

  get subscriptionTitle() {
    return cy.get(`${this.container} .single-widget h2`);
  }

  get emailInput() {
    return cy.get('#susbscribe_email');
  }

  get subscribeButton() {
    return cy.get('#subscribe');
  }

  get successMessage() {
    return cy.get('#success-subscribe');
  }

  scrollToFooter() {
    cy.get(this.container).scrollIntoView();
  }

  verifySubscriptionVisible() {
    this.subscriptionTitle
      .should('be.visible')
      .and('contain', 'Subscription');
  }

  subscribeEmail(email) {
    this.emailInput.type(email);
    this.subscribeButton.click();
  }

  verifySuccessSubscription(successMessageText) {
    this.successMessage
      .should('be.visible')
      .and('contain', successMessageText);
  }
}