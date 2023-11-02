describe('user-can-create-new-user', () => {
  //before each test case
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
    cy.get('.card-header-action > .btn-icon').click();
  });
  //positif test cases
  it('user can create new user', () => {
    
    cy.get('#name').type('user');
    cy.get('#email').type('user@gmail.com');
    cy.get('#password').type('123456789');
    cy.get('.btn-primary').click();
    //assert
    cy.get('p').should("be.visible");
    cy.get('p').should("have.text","Data Berhasil Ditambahkan")
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  })

  //negatif test cases

  it('user cannot create new user because invalid email ', () => {
    //act
    cy.get('#name').type('user');
    cy.get('#email').type('baru');
    cy.get('#password').type('123456789');
    cy.get('.btn-primary').click();
    //assert
    cy.get(".invalid-feedback").should("be.visible");
    cy.get(".invalid-feedback").should(
      "contain","The email must be a valid email address.");

    // cy.get('.invalid-feedback').should("have.class",".invalid-feedback");
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  })

  it('user cannot create new user because name is required', () => {
    //act
    
    cy.get('#email').type('user@gmail.com');
    cy.get('#password').type('123456789');
    cy.get('.btn-primary').click();
    //assert
    cy.get(".invalid-feedback").should("be.visible");
    cy.get(".invalid-feedback").should("have.class","invalid-feedback");
    

    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();

    // cy.get(".invalid-feedback").should("contain","The name filed is required.");
    /* ==== End Cypress Studio ==== */
  })
  
})