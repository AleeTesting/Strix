
import {basePage} from '../page-objects/base-page.js';
import {homePage} from '../page-objects/home-page.js';
import {searchResultPage} from '../page-objects/search-result-page.js';
import {productPage} from '../page-objects/product-page.js';
import {cartPage} from '../page-objects/cart-page.js';
import {checkoutLoginPage} from '../page-objects/checkout-login-page.js';
import {shippingPage} from '../page-objects/shipping-page.js';
import {paymentPage} from '../page-objects/payment-page.js';

Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);
  debugger;
  return false;
});

describe('Order product as guest user (polish)',
{
  env: {
    leanguage: 'pl',
    product_key: '108',
    delivery: 'kurier',
  },
},
() => {
  before(function(){
    homePage.navigate(Cypress.env('leanguage'));
    cy.wait(1000);
  })

it('should be able to find a product', function(){
    //Search for the product by using a unique color number.
    //Note that some products may trigger a different flow eg. additional modal window
    basePage.search(Cypress.env('product_key'),Cypress.env('leanguage'));
    searchResultPage.validateFirstResult(Cypress.env('product_key'));
  })
  it('should be able to open a product', function(){
    searchResultPage.openFirstProduct();
    productPage.validateProduct(Cypress.env('product_key'),);
  })
  it('should be able to add product to cart', function(){
    productPage.addProductToCart();
  })
  it('should be able to checkout cart', function(){
    productPage.cartCheckoutSpecial();
    cartPage.validateProductAdded(Cypress.env('product_key'));

  })
  it('should be able to order as a guest', function(){
    cartPage.checkoutCart();
    checkoutLoginPage.orderAsGuest();
  })
  it('should be able to enter address', function(){
    shippingPage.enterShippingAddress();
    shippingPage.selectDelivery(Cypress.env('delivery')); 
    shippingPage.goToPayment();
  })
  it('should be able to selct payment', function(){
    paymentPage.validateProduct(Cypress.env('product_key'));
    paymentPage.validateShippingAddress();
    paymentPage.validateOrder();
  })
})