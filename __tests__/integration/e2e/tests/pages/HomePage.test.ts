describe('Home Page', () => {
  it('Navigate to Home Page and check the content', () => {
    cy.visit('/');

    // Assert
    cy.findByText('Documentation →').should('exist');
    cy.findByText('Examples →').should('exist');
    cy.findByText('Learn →').should('exist');
    cy.findByText('Deploy →').should('exist');
  });
});
