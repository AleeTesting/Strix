// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
let appHasStarted
function spyOnAddEventListener (win) {
// win = window object in our application
  const addListener = win.EventTarget.prototype.addEventListener
  win.EventTarget.prototype.addEventListener = function (name) {
    if (name === 'change') {
    // web app added an event listener to the input box -
    // that means the web application has started
    appHasStarted = true
    // restore the original event listener
    win.EventTarget.prototype.addEventListener = addListener
    }
  return addListener.apply(this, arguments)
  }
}
function waitForAppStart() {
// keeps rechecking "appHasStarted" variable
  return new Cypress.Promise((resolve, reject) => {
    const isReady = () => {
      if (appHasStarted) {
        return resolve()
      }
      setTimeout(isReady, 0)
    }
    isReady()
  })
}

Cypress.Commands.add('visit_start', (url,timeout_value) => {
    cy.visit(url,{onBeforeLoad: spyOnAddEventListener}).then({ timeout: timeout_value },waitForAppStart);
})