describe('Sauce demo', () => {
  beforeEach(() => {
    cy.visit('/'); // Vai usar o baseUrl definido no cypress.env.json
  });

  it('logs in Successfully', () => {
    // Preenche o campo usuário
    cy.get('[data-test="username"]').type('standard_user');
    
    // Preenche o campo senha
    cy.get('[data-test="password"]').type('secret_sauce');
    
    // Clica no botão de login
    cy.get('[data-test="login-button"]').click();
    
    cy.contains('.title', 'Products').should('be.visible');
  });

    it('tries to login with a locked out user', () => {
      // Preenche o campo usuário
    cy.get('[data-test="username"]').type('locked_out_user');
    
    // Preenche o campo senha
    cy.get('[data-test="password"]').type('secret_sauce');
    
    // Clica no botão de login
    cy.get('[data-test="login-button"]').click();
    
    cy.get('.error-message-container').should('be.visible');
    })

});
