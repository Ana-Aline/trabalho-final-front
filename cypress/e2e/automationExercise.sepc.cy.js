/// <reference types="cypress" />
import { AuthPage } from '../support/pages/auth.page';
import { ProductsPage } from '../support/pages/product.page';
import { newUser, staticUser, searchData } from '../support/data/userData';

describe('Automation Exercise', () => {

  const authPage = new AuthPage(); //instantiate once
  const productsPage = new ProductsPage();

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

  it('CT 03: Error when login User with incorrect email and password', () => {
    //Arrange
    authPage.accessAuthPage();
    authPage.fillLogin(`qa_${Date.now()}@test.com`, 'senhaErrada123');

    //Act
    authPage.submitLogin();

    //Assert
    authPage.verifyLoginError();
  });

  it('CT 04: Logout user', () => {
    //Arrange
    authPage.accessAuthPage();
    authPage.fillLogin(staticUser.email, staticUser.password);
    authPage.submitLogin();

    //Act
    authPage.logout();

    //Assert
    authPage.verifyLoggedOut();
  });
  it('CT 05: Register new user with existing email', () => {
    //Arrange
    authPage.accessAuthPage();

    //Arrange + Act
    authPage.fillInitialSignup(staticUser.name, staticUser.email);

    //Assert
    authPage.verifyEmailAlreadyExistsError();
  });
  it('CT 08: Verify All Products and product detail page', () => {
    //Arrange
    productsPage.accessProductsPage();

    //Act
    productsPage.clickFirstProductView();
    
    //Assert
    productsPage.verifyProductDetailsAreVisible();
  });
  it.only('CT 09: Search Product', () => {
    //Arrange
    productsPage.accessProductsPage();

    //Act
    productsPage.searchProduct(searchData.validProduct);
    
    //Assert
    productsPage.verifySearchedProductsVisible();
  });
});
