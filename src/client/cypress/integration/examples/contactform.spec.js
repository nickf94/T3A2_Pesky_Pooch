describe("Test contact form submit", () => {
  it("Should go to the contact page", () => {
    cy.viewport(1024, 768);
    cy.visit("/");
    cy.contains("Contact").click();
    cy.url().should("include", "/contact");
  });

  it("should render ContactForm component", () => {
    cy.root()
      .should("contain", "Email")
      .should("contain", "Title")
      .should("contain", "Message");
    cy.get("form").submit();
  })
});
