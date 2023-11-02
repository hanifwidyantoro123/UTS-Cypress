describe('user can login to system', () => {

  //positif test case
  it("user can login with valid username and valid password", () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    cy.get('.btn').click();
    //assert
    cy.get('.nav-link > .d-sm-none').should("have.text","Hi, SuperAdmin");
  })

  it("user can login with valid username and wrong password", () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password-salah");
    cy.get('.btn').click();
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should(
      'have.text', 'The password field is required.'
    );
  })

  it("user can login with invalid username and valid password", () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin123@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should(
      'have.text', 'The password field is required.'
    );
  })

  // //nengatif test case
  it("user cannot login with empty username and correct password", () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should(
      'have.text', 'The email field is required.'
    );
  });

  it("user cannot login with correct username and empty password", () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type("superadminad@gmail.com");
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should(
      'have.text', 'The password field is required.'
    );
  });

  //positif
  it.only("user can create account ", () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get('.text-small').click();
    //assert
    cy.get('h4').should("have.text","Forgot Password");
  });
})