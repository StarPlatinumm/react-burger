import { BURGER_API_URL } from "../../src/utils/api"

describe('Application', () => {
  beforeEach(() => {
    cy.intercept('GET', `${BURGER_API_URL}/ingredients`, { fixture: 'ingredients'});
    cy.visit('http://localhost:3000/');
  })

  it("should open ingredients popup", () => {
    cy.get("[data-test=ingredients]").contains('Просто булка').click();
    cy.get("[data-test=closeModalButton]").click();
  });

  it("should drag buns", () => {
    cy.get("[data-test=ingredients]").contains('Просто булка').trigger("dragstart");
    cy.get("[data-test=constructor]").trigger("drop");
    cy.get("[data-test=top_bun]").contains('Просто булка (верх)').should("exist");
    cy.get("[data-test=bottom_bun]").contains('Просто булка (низ)').should("exist");
  });

  it("should drag mains", () => {
    cy.get("[data-test=ingredients]").contains('Просто котлетка').trigger("dragstart");
    cy.get("[data-test=constructor]").trigger("drop");
    cy.get("[data-test=constructor]").contains('Просто котлетка').should("exist");
  });

})