beforeEach(() => {
  cy.viewport(550,750);
  cy.visit("/");
})

describe("Test website", () => {
  it("Should navigate the website", () => {
    cy.get('ul').children().contains('Home').click()
    cy.visit("/");
    cy.contains("About").click();
  })
})
// it("should render the services page", () => {
//   cy.get('.ul').find('Link')
//   cy.contains("Services").click();
//   cy.url().should("include", "/services")
// })
//
// it("Should render the contact page", () => {
//   cy.get('.ul').find('Link')
//   cy.contains("Contact").click();
//   cy.url().should("include", "/contact")
// })
