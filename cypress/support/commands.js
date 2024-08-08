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

import loginPage from "../PageObjects/loginPage";
import securePage from "../PageObjects/securePage";

const LoginPage = new loginPage();

Cypress.Commands.add("login", (username, password) => {
  LoginPage.elements.txtUsername().type(username);
  LoginPage.elements.txtPassword().type(password);
  LoginPage.elements.btnLogin().click();
});

const SecurePage = new securePage();

Cypress.Commands.add("logout", () => {
  SecurePage.elements.btnLogout().click();
});

