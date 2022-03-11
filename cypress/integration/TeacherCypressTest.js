context('Actions', () => {
    beforeEach(() => {
      cy.visit('localhost:3000/') //Local site for Cypress
    })
  
      it('.type() - type into a DOM element', () => {
     //Testing login with Cypress. Testing Auth for Teacher login
          cy.get('[placeholder="username"]')
          .type('honey.freeman@bookworms.sch.uk').should('have.value', 'honey.freeman@bookworms.sch.uk')
          cy.get('[type="password"]')
          .type('bookworms123').should('have.value', 'bookworms123')
     //Testing fetch and database POST. Fetching info on Student.
          cy.get('button').contains('Go!').click()
          cy.get('#s17').click()
          cy.get('.teachernavbar_moreinfo__oHsjJ').click()
     //Testing POST to database. 
          cy.get('.teacherinfo_input__n3ihe')
          .type('Cypress Testing').should('have.value', 'Cypress Testing')
          cy.get('.teacherinfo_button__7GWRV').click()
    //Testing Logout 
          cy.get('.teachernavbar_logout__qIqx0').click()
}
  )
    }
      )   