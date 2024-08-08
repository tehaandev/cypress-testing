/// <reference types="cypress" />

import parameters from "../../fixtures/parameters.json";
import securePage from "../../PageObjects/securePage";
import loginPage from "../../PageObjects/loginPage";

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

// logout test
describe("Verify Logout Functionality", () => {
  before(() => {
    cy.visit("/secure");
  });
  it("User should logout from the site successfully", () => {
    SecurePage.elements.btnLogout().click();
    cy.url().should("contain", "/login");
  });
});

describe("Verify Login Functionality with incorrect password", () => {
  before(() => {
    cy.visit("/login");
  });
  it("User should not login to the site successfully", () => {
    cy.login(parameters.loginPage.username, "incorrectPassword");
    cy.url().should("contain", "/login");
    LoginPage.elements
      .invalidAlt()
      .should("contain", parameters.loginPage.pwdError);
  });
});

describe("Verify Login Functionality with incorrect username", () => {
  before(() => {
    cy.visit("/login");
  });
  it("User should not login to the site successfully", () => {
    cy.login("incorrectUsername", parameters.loginPage.password);
    cy.url().should("contain", "/login");
    LoginPage.elements
      .invalidAlt()
      .should("contain", parameters.loginPage.usernameError);
  });
});

