import { newUser } from '../data/userData';
import { AuthElements } from './elements/auth.elements';
import { ROUTES } from '../data/routes';
import { MESSAGES } from '../data/messages';

export class AuthPage {
  accessAuthPage() {
    cy.visit(ROUTES.LOGIN)
  }

  fillInitialSignup(name, email) {
    cy.get(AuthElements.nameInput).type(name);
    cy.get(AuthElements.emailInput).type(email);
    cy.get(AuthElements.signupButton).click();
  }

  fillAccountDetails() {
    cy.get(AuthElements.mrsSelect).click();
    cy.get(AuthElements.passwordInput).type(newUser.password);
    cy.get(AuthElements.dayBirthSelect).select('15');
    cy.get(AuthElements.monthBirthSelect).select('May');
    cy.get(AuthElements.yearBirthSelect).select('1995');

    cy.get(AuthElements.newsletterCheck).check();
    cy.get(AuthElements.optinCheck).check();

    // Address
    cy.get(AuthElements.firstNameInput).type(newUser.firstName);
    cy.get(AuthElements.lastNameInput).type(newUser.lastName);
    cy.get(AuthElements.adressInput).type(newUser.address);
    cy.get(AuthElements.countrySelect).select(newUser.country);
    cy.get(AuthElements.stateInput).type(newUser.state);
    cy.get(AuthElements.cityInput).type(newUser.city);
    cy.get(AuthElements.zipCodeInput).type(newUser.zipcode);
    cy.get(AuthElements.mobileNumberInput).type(newUser.mobileNumber);
  }

  submitAccountCreation() {
    cy.get(AuthElements.createAccountButton).click();
  }

  verifyAccountCreated() {
    cy.get(AuthElements.successAccountMessage)
      .should('be.visible')
      .and('contain', MESSAGES.ACCOUNT_CREATED);
  }

  clickContinue() {
    cy.get(AuthElements.continueButton).click();
  }
}