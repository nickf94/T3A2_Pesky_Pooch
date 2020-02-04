let fixtures = {};

beforeEach(() => {
  cy.viewport(550, 750);
  cy.visit(process.env.BASE_URL || "/");
  cy.get('a').find('Login')
  cy.get('ul').find('li')
  cy.contains("Home").click();
  cy.fixture("registeredUser.json").then((user) => {
    fixtures.registeredUser = user;
  })
})

describe("Test login", () => {
  it("Should go to the login page", () => {
    cy.get('ul').find('li')
    cy.get('[data-cy=login]').click();
    cy.url().should("include", "/login")
  });

  it("Should render the Login component", () => {
    cy.get('ul').find('li')
    cy.visit("/login")
    cy.get("[data-cy=login-form]").should("be.visible")
  })

  it("Can login", () => {
    cy.contains("Login").click();
    cy.get("[data-cy=email]").type(fixtures.registeredUser.email);
    cy.get("[data-cy=password]").type(fixtures.registeredUser.password);
    cy.get("[data-cy=loginbutton]").click();
  });
});
