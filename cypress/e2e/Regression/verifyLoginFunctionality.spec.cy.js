/// <reference types="cypress" />

import parameters from "../../fixtures/parameters.json";
import securePage from "../PageObjects/securePage";
import loginPage from "../PageObjects/loginPage";

const LoginPage = new loginPage();
const SecurePage = new securePage();

describe("Verify Login Functionality", () => {
  before(() => {
    cy.visit("/login");
  });
  it("User should login to the site successfully", () => {
    cy.login(parameters.loginPage.username, parameters.loginPage.password);
    cy.url().should("contain", "/secure");
    SecurePage.elements
      .txtWelcome()
      .should("contain", parameters.securePage.title);
  });
});
