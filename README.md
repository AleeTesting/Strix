# Strix
Recruitment Exercise
## Exercise 1
### Introduction:
This exerecise was cretaed with the help of **Postman** The collection and environment files are availabie in the Strix/Exercise1 path.
### Assumptions/Limitations:
- API Test were based on the acutal behaviour and not based on the (grapql,rest) requriement, defintions
- Some of the requests to searchnode.net were not included - assumed not to be part of the critical path
- API Test doesnt contain shopping as a looged in user
- API Test is using a single product and one store details for a test data. Both were chosen to limit the likelihood of false positive, still it may cause some issues during execution (eg. no product in the warehouse, store closed)
- API Test has some space for improvement in terms of time of execution (are all request neccessary?) and some assertions (regex in the body response). For this some pairing is adivesed before sending to the monitoring
- For the API Test, the query_key has been parametrized and hardcoded.It supposed to be geneerated based on the given api specification 

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


## Exercise 2
### Introduction
The exercise was performed following the below flow:
1. Functional Analysis of the page using [mindmap](https://coggle.it/diagram/YrYu8LndxQl8MoIF/t/semilac-pl)
2. Analysis of the User Flows and prioritisation - [priority tab](https://docs.google.com/spreadsheets/d/1YTQLFPOZr83975LFVXIoEw5UtAZLwy5arq4D67wmeYM/edit?usp=sharing)
3. Designing the scope of the Pages need for test automation - [page objects](https://docs.google.com/spreadsheets/d/1YTQLFPOZr83975LFVXIoEw5UtAZLwy5arq4D67wmeYM/edit#gid=968477189)
4. Selecting the Test Automation tool: Cypress 9.2 (the latest version 10 is not supported by Browserstack)
5. Design of the Page Objects  (Cypress/JS)
6. Design of the Test Script (Cypress/JS)
### Assumptions/Limitations
- The example tests is not completed, contains design for 2 out 7 steps
- The test was designed using Cypress 9.2
- The biggest not solved challanges are:f
  - Timinig issue when opening search field. Regardless fact that cypresss has it's own wiating mechanism, only explicit wait helped in typing in the search field locally. For the Browserstack this issue still persists
  - Issues when adding product to basket. It seems there is unknow background activty that prevents from adding a product to basket using cypress. Ideally this should be crossed refferenced with not Webdriver tool to find out if this is a Cypress issue only
- The automated test were designed to support different leanguages, however this shall be further analyzed as the web page for different leanguags,  contatins a slitghly different UI. To cover every scenario, dedicated logic needs to be implemented which makes the test automated scrtips unnecessarly  complex
- The execution of the 2 out of 7 steps, is already consuming 30-40 seconds, which indicates that the full test script will take aroung 2-3 minutes. 
## Exercise 3
## Exercise 4
### Authorization
- u:JanekzChmur (at) gmail.com
- p:lowercas user name
- [public link](https://automate.browserstack.com/dashboard/v2/public-build/MTc1NERIaXdaU1NXRGdXM1UxV2RxMk9Sb0JVY3Q3b05aSFlCcUxkdzVPRjh4YzJ1ZHY4RHNmVTlMNEVHQ25zYS91dXYzb0lFTnpKNXFTdm9CUVRnb1E9PS0teC9ORStzaGs4NjgvaGFvb2xzM1Q5dz09--c810abd4014c96569ad2f08518978a9db47667fa)
### Assumptions/Limitations:
- The execution on the BrowserStack shows that there is still a timing issue for the Chrome browsers when trying to open search field

