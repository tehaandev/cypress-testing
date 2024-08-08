export default class loginPage {
  elements = {
    txtUsername: () => cy.get("#username"),
    txtPassword: () => cy.get("#password"),
    btnLogin: () => cy.get(".btn-primary"),
    invalidAlt: () => cy.get("#flash b"),
  };
}

