/// <reference types="cypress" />
import { AuthPage } from '../support/pages/auth.page';
import { ProductsPage } from '../support/pages/product.page';
import { HomePage } from '../support/pages/home.page';
import { CartPage } from '../support/pages/cart.page';
import { getNewUser, staticUser, searchData, paymentData } from '../support/data/userData';

describe('Automation Exercise', () => {

  const authPage = new AuthPage(); //instantiate once
  const productsPage = new ProductsPage();
  const homePage = new HomePage();
  const cartPage = new CartPage();

  it('CT 01: Register new user with success', () => {
    //Arrange
    const newUser = getNewUser();
    authPage.accessAuthPage();
    authPage.fillInitialSignup(newUser.name, newUser.email);
    authPage.fillAccountDetails(newUser);

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
  it('CT 09: Search Product', () => {
    //Arrange
    productsPage.accessProductsPage();

    //Act
    productsPage.searchProduct(searchData.validProduct);
    
    //Assert
    productsPage.verifySearchedProductsVisible();
  });
  it('CT 10: Verify Subscription in home page', () => {
    //Arrange
    const newUser = getNewUser();
    homePage.accessProductsPage();
    homePage.scrollToFooter();

    //Act
    homePage.subscribeEmail(newUser.email);
    
    //Assert
    homePage.verifySuccessSubscription();
  });
  it('CT 15: Place Order - Register before Checkout', () => {
    //Arrange
    const newUser = getNewUser();

    authPage.accessAuthPage(); 
    authPage.fillInitialSignup(newUser.name, newUser.email);
    authPage.fillAccountDetails(newUser);
    authPage.submitAccountCreation();
    authPage.verifyAccountCreated();
    authPage.clickContinueAfterCreation();
    productsPage.accessProductsPage();

    //ACT
    productsPage.clickFirstProductView();
    productsPage.addProductToCart();
    productsPage.clickCartModal(); 
    cartPage.proceedToCheckout();
    cartPage.addCommentAndPlaceOrder('Comentário de teste automatizado para o pedido.');
    cartPage.fillPaymentDetails(paymentData);
    cartPage.submitePaymentDetails();
    
    //ASEERTION
    cartPage.verifyOrderSuccess();

    authPage.header.clickDeleteAccount();
  });
  it('CT 16: Place Order - Login before Checkout', () => {
    //Arrange
    authPage.accessAuthPage(); 
    authPage.fillLogin(staticUser.email, staticUser.password);
    authPage.submitLogin();
    authPage.verifyLoggedInAs(staticUser.name);


    productsPage.accessProductsPage();

    //ACT
    productsPage.clickFirstProductView();
    productsPage.addProductToCart();
    productsPage.clickCartModal(); 
    cartPage.proceedToCheckout();
    cartPage.addCommentAndPlaceOrder('Comentário de teste automatizado para o pedido.');
    cartPage.fillPaymentDetails(paymentData);
    cartPage.submitePaymentDetails();
    
    //ASEERTION
    cartPage.verifyOrderSuccess();
  });
});
