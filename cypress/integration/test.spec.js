/*describe('Heading', () => {
    it('has the right title', () => {
        cy.visit('http://184.72.133.230:5000/example-1')

        cy.get('h1')
            .invoke('text')
            .should("equal", "My Awesome Web Application")
    });

});
*/

describe('Testing character input',() => { //name of our test
 
    it('check input number',() => { //our test

        cy.visit('http://localhost:5000/example-2')//cypress goes to pg
        
        cy.get('span')
        .invoke('text')
        .should('equal','15')

        cy.get('input').type('hello')

        cy.get('span')
        .invoke('text')
        .should('equal','11')

        
    });
});
