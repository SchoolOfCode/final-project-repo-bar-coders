context('Actions', () => {
    beforeEach(() => {
      cy.visit('localhost:3000/') //Local site for Cypress
    })
  
      it('.type() - type into a DOM element', () => {
     //Testing login with Cypress. Testing Auth for Teacher login
          cy.get('[placeholder="username"]')
          .type('alice.taylor@bookworms.sch.uk').should('have.value', 'alice.taylor@bookworms.sch.uk')
          cy.get('[type="password"]')
          .type('bookworms123').should('have.value', 'bookworms123')
          cy.get('button').contains('Go!').click()
       
        //   cy.reload(forceReload)

          cy.get('.studenthome_newBookButton__3NljZ').click()
          cy.wait(100)
        
          cy.get('[placeholder="Book title"]')
          .type('The BFG').should('have.value', 'The BFG')
          cy.wait(500)
          cy.get('.newbook_container__5Ldx9 > button').click()
          cy.wait(1000)
          cy.get('.newbook_buttonDiv__19IK9 > :nth-child(1)').click()
          cy.wait(500)
          cy.get('.image-gallery-right-nav > .image-gallery-svg').click()
          cy.wait(500)
          cy.get('.image-gallery-right-nav > .image-gallery-svg').click()
          cy.wait(500)
          cy.get('.image-gallery-right-nav > .image-gallery-svg').click()
          cy.wait(500)
          cy.get('.center > .image-gallery-image').click()
          cy.wait(1000)
          cy.get('.Navbar_navbar__66x_3 > [href="/studenthome"]').click()
          cy.wait(1000)
          cy.get('.Navbar_navbar__66x_3 > [href="/dictionary"]').click()
          cy.get('input').type('Giant').should('have.value', 'Giant')
          cy.wait(1000)
          cy.get('form > button').click()
          cy.wait(5000)
          cy.get('.dictionary_resetButton__BHs9G').click()
          cy.get('.Navbar_navbar__66x_3 > [href="/studenthome"]').click()
          cy.get('.Navbar_logoutbutton___6PkG').click()
          
        })})

          
        