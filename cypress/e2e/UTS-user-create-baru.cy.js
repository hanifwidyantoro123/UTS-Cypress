describe('template spec', () => {
   //before each test case
   afterEach(()=>{
    cy.exec('cd ..cd/demo-app-cypress-automation && php artisan migrate:fresh --seed', { failOnNonZeroExit: false }).then((result) => {
      // Assert that the command exited with a successful exit code.
      expect(result.code)
      });
  })
   beforeEach(()=>{
    //arrange
    cy.visit('http://localhost:8000/');
    cy.exec('cd ..cd/demo-app-cypress-automation && php artisan migrate:fresh --seed', { failOnNonZeroExit: false }).then((result) => {
  // Assert that the command exited with a successful exit code.
  expect(result.code)
  });

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    //act
    cy.visit('http://localhost:8000/user-management/user');
    
  });
  //positif test cases
  it('user can create new user', () => {
    cy.get('.card-header-action > .btn-icon').click();
    cy.get('#name').type('user baru');
    cy.get('#email').type('polinema@gmail.com');
    cy.get('#password').type('123456789');
    cy.get('.btn-primary').click();
    //assert
    cy.get('p').should("be.visible");
    cy.get('p').should("have.text","Data Berhasil Ditambahkan")
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  })

  it('User can edit existing data user baru', () => {
    cy.get(".table td")
    .contains("user baru")
    .parent()
    .find("a")
    .contains("Edit")
    .click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#name').clear('user baru');
    cy.get('#name').type('user baru edited');
    cy.get('.btn-primary').contains("Submit").click();
    cy.get('.table td')
    .contains('user baru').should('have.text','user baru edited');
    /* ==== End Cypress Studio ==== */
    cy.get(".alert")
    .should("be.visible")
    .and("have.class","alert-success")
    .and("contain","User Berhasil Diupdate")
  })

  it('User can edit existing data user', () => {
    cy.get(".table td")
    .contains("user")
    .parent()
    .find("a")
    .contains("Edit")
    .click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#name').clear('user');
    cy.get('#name').type('user2');
    cy.get('.btn-primary').contains("Submit").click();
    cy.get('.table td')
    .contains('user').should('have.text','user2');
    /* ==== End Cypress Studio ==== */
    cy.get(".alert")
    .should("be.visible")
    .and("have.class","alert-success")
    .and("contain","User Berhasil Diupdate")
  })

  it('user can delete data', () => {
    //arange
      //act
    cy.get(".table td")
    .contains("user baru edited")
    .parent()
    .find("button")
    .contains("Delete")
    .click();
    //make sure sweet alert isible
  
    cy.get(".swal-button-container").find("button").contains("OK").click();
    //assert
    cy.get('.alert')
    .should('be.visible')
    .and('have.class', 'alert-success')
    .contains("User Deleted Successfully")
    cy.get(".table").should("not.contain","user baru edited");
  })
})