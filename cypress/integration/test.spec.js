describe('Heading', () => {
    it('has the right title', () => {
        cy.visit('http://184.72.133.230:5000/example-1')

        cy.get('h1')
            .invoke('text')
            .should("equal", "My Awesome web Application")
    });

});


