describe("Test login", () => {
  it("Should go to the login page", () => {
    cy.viewport(1024, 768);
    cy.visit("localhost:3000/login");
  })
})
