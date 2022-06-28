# Strix
Strix_zadanie rekrutacyjne
## Exercise 1
### Introduction:
This exerecise was cretaed with the help of **Postman** The collection and environment files are availabie in the Strix/Exercise1 path.
### Assumptions/Limitations:
- API Tests were based on the acutal behaviour and not based on the (grapql,rest) requriement, defintions
- Some of the requests to searchnode.net were not included - assumed not to be part of the critical path
- API Test is using a single product and one store details. Both were chosen to limit the likelihood of false positive, still it may cause some issues during execution (eg. no product in the warehouse, store closed)
- API Tests has some space for improvement in terms of time of execution and some assertions

### Scope of the API test
- Home Page (castorama.pl)
  - getToHomePage
- Product Search
  - searchProduct
  - getProductDetails
  - displayProduct
- Create Cart
  - createEmptyCart
  - addProductToCart
  - getMarkets
  - getProductStatusStore
  - getStoreDetails
  - fetchCart
  - fetchCartAvailableStores
- Cart Checkout
  - getCountries
  - fetchCartForCheckout
  - getCountryPhones
  - getZipCodes
  - setShippingAddressesOnCart
  - setGuestEmailOnCart
  - setShippingMethodsOnCart
  - setPaymentMethod
  - setBillingAddressOnCart
### Execution time
The average execution time for the above scope 11-12s 

### Running via CI
Follow the guide https://learning.postman.com/docs/running-collections/using-newman-cli/continuous-integration/
You should end up in a similar commands as below:
```
newman run https://api.getpostman.com/collections/{{collection_uid}}?apikey={{postman-api-key-here}}
--environment https://api.getpostman.com/environments/{{environment_uid}}?apikey={{postman-api-key-here}}
```
### Frequency of execution
Every 5 minutes / per country region


## Zadanie 2
1. Analiza funckjonalna witryny [https://coggle.it/diagram/YrYu8LndxQl8MoIF/t/semilac-pl]
2. Analiza przejść funckjonalnych i priorytetyzacja https://docs.google.com/spreadsheets/d/1YTQLFPOZr83975LFVXIoEw5UtAZLwy5arq4D67wmeYM/edit#gid=0
## Zadanie 3
## Zadanie 4
