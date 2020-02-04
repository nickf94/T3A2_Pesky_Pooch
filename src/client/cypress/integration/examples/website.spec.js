beforeEach(() => {
  cy.viewport(1024,768);
  cy.visit("/");
  cy.contains("Home").click();
})

describe("Test website", () => {
  it("Should navigate the website", () => {
    cy.visit("/");
    cy.contains("About").click();
  })
})
it("should render the services page", () => {
  cy.contains("Services").click();
  cy.url().should("include", "/services")
})

it("Should render the contact page", () => {
  cy.contains("Contact").click();
  cy.url().should("include", "/contact")
})
