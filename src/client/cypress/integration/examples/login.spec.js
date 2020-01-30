describe("Test login", () => {
  it("Should go to the login page", () => {
    cy.viewport(1024, 768);
    cy.visit("localhost:3000/");
    cy.contains("/Home").click();
  });

  it("Should render SignIn component", () => {
    cy.contains("/login").click();
    cy.root()
      .should("contain", "Email")
      .should("contain", "Password");
  })
})
