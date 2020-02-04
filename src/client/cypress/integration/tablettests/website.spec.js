beforeEach(() => {
  cy.viewport(2732, 2048);
  cy.get('ul').find('li')
  cy.visit("/");
  cy.contains("Home").click();
})

describe("Test website", () => {
  it("Should navigate the website", () => {
    cy.get('ul').find('li')
    cy.visit("/");
    cy.contains("About").click();
  })
})
it("should render the services page", () => {
  cy.get('#ul').find('Link')
  cy.contains("Services").click();
  cy.url().should("include", "/services")
})

it("Should render the contact page", () => {
  cy.get('ul').find('li')
  cy.contains("Contact").click();
  cy.url().should("include", "/contact")
})
