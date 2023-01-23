/// <reference types="Cypress" />

describe('Flo checkout login test', () => {
  beforeEach(() => {
    cy.visit('https://checkout.flo.com.tr/login')
  })

  it('should have a title', () => {
    cy.title().should('eq', 'Giriş')
  })
});
