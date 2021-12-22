describe('Navigation', () => {
    it('should navigate to the welcome page', () => {
        // Start from the index page
        cy.visit('/')

        // The new page should contain an h1 with "Welcome"
        cy.get('h1').contains('Welcome')
    })
})
