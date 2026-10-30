/// <reference types="cypress" />
import { AuthPage } from '../support/pages/auth.page';
import { newUser, staticUser } from '../support/data/userData';
// import userData from '../fixtures/example.json'
// import {
//   getRandomNumber,
//   getRandomEmail
// } from '../support/helpers'
1
// import { faker } from '@faker-js/faker'


describe('Automation Exercise', () => {

  const authPage = new AuthPage(); //instantiate once

  it('CT 01: Register new user with success', () => {
    //Arrange
    authPage.accessAuthPage();
    authPage.fillInitialSignup(newUser.name, newUser.email);
    authPage.fillAccountDetails();

    //Act
    authPage.submitAccountCreation();

    //Assert
    authPage.verifyAccountCreated();

  });

  it('CT 02: Login User with correct email and password', () => {
    //Arrange
    authPage.accessAuthPage();
    authPage.fillLogin(staticUser.email, staticUser.password);

    //Act
    authPage.submitLogin();

    //Assert
    authPage.verifyLoggedInAs(staticUser.name);

  });

})
