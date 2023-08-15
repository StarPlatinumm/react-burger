import { BURGER_API_URL } from "../../src/utils/api"

describe('Application', () => {
  beforeEach(() => {
    cy.intercept('GET', `${BURGER_API_URL}/ingredients`, { fixture: 'ingredients'});
    cy.visit('http://localhost:3000/');
    cy.get("[data-test=ingredients]").contains('Просто булка').as('bun');
    cy.get("[data-test=ingredients]").contains('Просто котлетка').as('main');
    cy.get("[data-test=constructor]").as('constructor');
  })

  it("should open ingredients popup", () => {
    cy.get("@bun").click();
    cy.get("[data-test=closeModalButton]").click();
  });

  it("should drag buns", () => {
    cy.get("@bun").trigger("dragstart");
    cy.get("@constructor").trigger("drop");
    cy.get("[data-test=top_bun]").contains('Просто булка (верх)').should("exist");
    cy.get("[data-test=bottom_bun]").contains('Просто булка (низ)').should("exist");
  });

  it("should drag mains", () => {
    cy.get("@main").trigger("dragstart");
    cy.get("@constructor").trigger("drop");
    cy.get("@constructor").contains('Просто котлетка').should("exist");
  });

})