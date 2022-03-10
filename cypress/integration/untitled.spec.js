


context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://bookwormsreading.netlify.app')
    })
  

  
    it('.type() - type into a DOM element', () => {
      // https://on.cypress.io/type
      cy.get('[placeholder="username"]')
        .type('honey.freeman@bookworms.sch.uk').should('have.value', 'honey.freeman@bookworms.sch.uk')
        cy.get('[type="password"]')
        .type('bookworms123').should('have.value', 'bookworms123')

cy.get('button').contains('Go!').click()
cy.get('#s17').click()
cy.get('.teachernavbar_moreinfo__oHsjJ').click()
// cy.get('.teacherinfo_input__n3ihe')
// .type('Cypress Testing').should('have.value', 'Cypress Testing')
// cy.get('.teacherinfo_button__7GWRV').click()


        }
    )
}
)   