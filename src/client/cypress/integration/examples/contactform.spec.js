describe("Test Contact Form", () => {
  it("Should go to the contact page", () => {
    cy.viewport(1024, 768);
    cy.visit("https://localhost:3000/");
    cy.get(".hamburger").click();
    cy.contains("Contact").click();
    cy.url().should("include", "/contact");
  });

  it("Should render Contact form", () => {
    cy.contains("Contact").click();
    cy.root()
      .should("contain", "Email")
      .should("contain", "Title")
      .should("contain", "Message");
  });
});
