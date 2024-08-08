export default class securePage {
  elements = {
    txtWelcome: () => cy.get("h1"),
    btnLogout: () => cy.get(".button"),
  };
}
