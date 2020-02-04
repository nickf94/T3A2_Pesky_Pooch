let fixtures = {};

beforeEach(() => {
  cy.viewport(2732, 2048)
  cy.visit("/")
  cy.contains("Home").click();
  cy.fixture("contact.json").then((message) => {
    fixtures.contact = message;
  })
})

describe("Test contact form", () => {
  it("Should go to the contact page", () => {
    cy.contains("Contact").click();
    cy.url().should("include", "/contact")
  });

  it("should render ContactForm component", () => {
    cy.visit("/contact")
    cy.get("[data-cy=contact-form]").should("be.visible")
  })

  it("Can send message", () => {
    cy.contains("Contact").click();
    cy.get("[data-cy=email]").type(fixtures.contact.email);
    cy.get("[data-cy=title]").type(fixtures.contact.title);
    cy.get("[data-cy=text]").type(fixtures.contact.text);
    cy.get("[data-cy=submit]").click();
  })
});
