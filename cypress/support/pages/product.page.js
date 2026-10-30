import { ProductElements } from './elements/product.elements';
import { ROUTES } from '../data/routes';

export class ProductsPage {
    accessProductsPage() {
        cy.visit(ROUTES.PRODUCTS);
    }

    clickFirstProductView() {
        cy.get(ProductElements.firstProductViewButton).first().click();
    }
    searchProduct(productName) {
        cy.get(ProductElements.searchInput).type(productName);
        cy.get(ProductElements.searchButton).click();
    }

    verifyProductDetailsAreVisible() {
        cy.url().should('include', '/product_details');
        cy.get(ProductElements.productDetailsContainer).should('be.visible');
        
        cy.get(ProductElements.productName).should('be.visible');
        cy.get(ProductElements.productCategory).should('be.visible');
        cy.get(ProductElements.productPrice).should('be.visible');
    }
    verifySearchedProductsVisible() {
        cy.get(ProductElements.searchedProductsTitle)
            .should('be.visible')
            .and('contain', 'Searched Products');
        cy.get(ProductElements.productsList).should('be.visible');
    }
}