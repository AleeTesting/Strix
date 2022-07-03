export class ProductPage{
    validateProduct(product){
        cy.get('.base')
            .should('contain', product);
    return this;
    }
    addProductToCart(){
        cy.get('#product-addtocart-button')
            .should('be.visible')
            .click();
    return this;
    }
    validateProductAdded(product){
        cy.get('.promoted-product__name > span')
            .should('contain',product);
    }
    cartCheckoutSpecial(){
        //Go to cart using the direct button option on the modal window, after adding a special product
        //cy.get('.modal-footer > .primary')
        //s    .click();
    }
    cartCheckout(){
        //Go to cart using the direct bottom link
        cy.get('.cart-link')
            .click();
    }
};
export const productPage = new ProductPage();

