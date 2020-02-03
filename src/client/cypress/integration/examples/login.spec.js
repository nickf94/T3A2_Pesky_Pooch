describe("Test login", () => {
  it("Should go to the login page", () => {
    cy.viewport(1024, 768);
    cy.visit(process.env.BASE_URL || "localhost:3000");
    cy.contains("Login").click();
    cy.url().should("include", "/login")
  });

  it("Should render SignIn component", () => {
    cy.contains("Login").click();
    cy.root()
      .should("contain", "Email")
      .should("contain", "Password");
  });
});
