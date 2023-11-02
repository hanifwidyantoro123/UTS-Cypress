describe('User can edit Existing data', () => {
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
 
  //positif tets cases
  it.only('User can edit existing data', () => {
    cy.get(".table td")
    .contains("hanif")
    .parent()
    .find("a")
    .contains("Edit")
    .click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#name').clear('hanif ');
    cy.get('#name').type('hanif edited');
    cy.get('.btn-primary').contains("Submit").click();
    cy.get('.table td')
    .contains('hanif').should('have.text','hanif edited');
    /* ==== End Cypress Studio ==== */
    cy.get(".alert")
    .should("be.visible")
    .and("have.class","alert-success")
    .and("contain","User Berhasil Diupdate")
  })

  //negatif test case
  it('negatif test case',()=>{

  })
})