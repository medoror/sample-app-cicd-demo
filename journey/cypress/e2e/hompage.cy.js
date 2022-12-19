describe('homepage', () => {
  it('will visit the homepage', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Learn React')
  })
})