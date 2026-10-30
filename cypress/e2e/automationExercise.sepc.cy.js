/// <reference types="cypress" />
import { AuthPage } from '../support/pages/auth.page';
import { newUser } from '../support/data/userData';
// import userData from '../fixtures/example.json'
// import {
//   getRandomNumber,
//   getRandomEmail
// } from '../support/helpers'
1
// import { faker } from '@faker-js/faker'


describe('Automation Exercise', () => {

  const authPage = new AuthPage(); //instantiate once

  it('CT 01: Deve registrar um novo usuário com sucesso', () => {
    //Arrange
    authPage.accessAuthPage();
    authPage.fillInitialSignup(newUser.name, newUser.email);
    authPage.fillAccountDetails();

    //Act
    authPage.submitAccountCreation();

    //Assert
    authPage.verifyAccountCreated();

    authPage.clickContinue();
  });

})
