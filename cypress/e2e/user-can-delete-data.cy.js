describe('template spec', () => {
  afterEach(()=>{
    cy.exec('cd ..cd/demo-app-cypress-automation && php artisan migrate:fresh --seed', { failOnNonZeroExit: false }).then((result) => {
      // Assert that the command exited with a successful exit code.
      expect(result.code)
      });
  })
  
  beforeEach(()=>{
    //arrange
    cy.exec('cd ..cd/demo-app-cypress-automation && php artisan migrate:fresh --seed', { failOnNonZeroExit: false }).then((result) => {
      // Assert that the command exited with a successful exit code.
      expect(result.code)
      });
    cy.visit('http://localhost:8000/');
    

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    //act
    cy.visit('http://localhost:8000/user-management/user');
    // cy.get('.card-header-action > .btn-icon').click();
  });
  //positif test cases
 
  it('user can delete data', () => {
    //arange
      //act
    cy.get(".table td")
    .contains("syamsul")
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
    cy.get(".table").should("not.contain","syamsul");
  })

  it('user can cancel delete data', () => {
   
    cy.get(".table td")
    .contains("hanif")
    .parent()
    .find("button")
    .contains("Delete")
    .click();
    //make sure sweet alert isible
    cy.get(".swal-button-container").find("button").contains("Cancel").click();
    //assert
    cy.get('.table td')
    .contains("hanif").should("be.visible");
  })

  //Negatif test cases
  it('No Negatif Test Case', () => {
    
    
  })
})