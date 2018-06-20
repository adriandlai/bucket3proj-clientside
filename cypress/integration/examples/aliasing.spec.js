// // / <reference types="Cypress" />

// / <reference types="Cypress" />

// describe('Visits the landing page and checks the logo', () => {
//   it('Check the page has a logo', () => {
//     cy.visit('http://localhost:3001/')
//     cy.get('.App-logo').should('have.attr', 'src', './assets/bizeatz.png')
//   })

  // it('Review table should have 3 rows', () => {
  //   cy.get('.three')

  // })

//   it('Ensure form is empty', function () {
//     cy.get('.input').should('be', 'empty')
//     cy.get('textarea').should('be', 'empty')
    
// })

// it('Submit a Review', function () {
//   cy.get('input').type('Riley Price')
//   cy.get('textarea').type('BizEatz is soo good it might even consider wearing longer shorts as a thank you to the world')  
//   cy.get('#submit-button').click()
// })

// it('Review table should have 4 rows', () => {
//   cy.get('.padded').find('tr').should('have.length', 4)

// })


// })





// context('Aliasing', () => {
//   beforeEach(() => {
//     cy.visit('https://example.cypress.io/commands/aliasing')
//   })

//   it('.as() - alias a DOM element for later use', () => {
//     // https://on.cypress.io/as

//     // Alias a DOM element for use later
//     // We don't have to traverse to the element
//     // later in our code, we reference it with @

//     cy.get('.as-table').find('tbody>tr')
//       .first().find('td').first()
//       .find('button').as('firstBtn')

//     // when we reference the alias, we place an
//     // @ in front of its name
//     cy.get('@firstBtn').click()

//     cy.get('@firstBtn')
//       .should('have.class', 'btn-success')
//       .and('contain', 'Changed')
//   })

//   it('.as() - alias a route for later use', () => {

//     // Alias the route to wait for its response
//     cy.server()
//     cy.route('GET', 'comments/*').as('getComment')

//     // we have code that gets a comment when
//     // the button is clicked in scripts.js
//     cy.get('.network-btn').click()

//     // https://on.cypress.io/wait
//     cy.wait('@getComment').its('status').should('eq', 200)

//   })
// })
