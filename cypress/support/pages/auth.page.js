import { AuthElements } from './elements/auth.elements';
import { ROUTES } from '../data/routes';
import { MESSAGES } from '../data/messages';
import { HeaderComponent } from '../components/header.component';

export class AuthPage {
  
  header = new HeaderComponent();

  accessAuthPage() {
    cy.visit(ROUTES.LOGIN)
  }

  fillLogin(email, password){
    cy.get(AuthElements.emailLoginInput).type(email);
    cy.get(AuthElements.passwordLoginInput).type(password);
  };
  fillInitialSignup(name, email) {
    cy.get(AuthElements.nameInput).type(name);
    cy.get(AuthElements.emailInput).type(email);
    cy.get(AuthElements.signupButton)
      .should('be.visible')
      .click();
  };
  fillAccountDetails(newUser) {
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
  };

  submitLogin() {
    cy.get(AuthElements.loginButton)
      .should('be.visible')
      .click();
  };
  submitAccountCreation() {
    cy.get(AuthElements.createAccountButton)
      .should('be.visible')
      .click();
  };
  clickContinueAfterCreation() {
    cy.get(AuthElements.continueButton)
      .should('be.visible')
      .click();
  }
  logout() {
    this.header.clickLogout();
  }

  verifyAccountCreated() {
    cy.get(AuthElements.successAccountMessage)
      .should('be.visible')
      .and('contain', MESSAGES.ACCOUNT_CREATED);
  };
  verifyLoggedInAs(username) {
    this.header.verifyLoggedInAs(username);
  }
  verifyLoggedOut(){
    cy.url().should('include', ROUTES.LOGIN);
  }
  verifyLoginError() {
    cy.get(AuthElements.loginErrorText)
      .should('be.visible')
      .and('contain', MESSAGES.INCORRECT_CREDENTIALS);
  }
  verifyEmailAlreadyExistsError() {
    cy.get(AuthElements.signupErrorText)
      .should('be.visible')
      .and('contain', MESSAGES.EMAIL_ALREADY_EXIST);
  }
}
