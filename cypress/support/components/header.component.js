// cypress/support/components/header.component.js
export class HeaderComponent {
  container = '.shop-menu > .nav';

  get deleteAccountButton() {
    return cy.get(`${this.container} a[href="/delete_account"]`);
  }

  get logoutButton() {
    return cy.get(`${this.container} a[href="/logout"]`);
  }

  get cartButton() {
    return cy.get(`${this.container} a[href="/view_cart"]`);
  }

  verifyLoggedInAs(username) {
    cy.contains('Logged in as')
      .should('be.visible')
      .and('contain', username);
  }

  clickDeleteAccount() {
    this.deleteAccountButton.should('be.visible').click();
  }

  clickLogout() {
    this.logoutButton.should('be.visible').click();
  }
}