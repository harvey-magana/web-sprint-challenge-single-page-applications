describe("Testing form inputs" , () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })
    it("adding text to inputs and submits to the form", () => {
        cy.get('[data-cy="name"]').type("Jeff").should("have.value", "Jeff")
        cy.get('[data-cy="special_instructions"]').type("Crispy crust").should("have.value", "Crispy crust")
        cy.get('[data-cy="pepperoni"]').check().should("be.checked")
        cy.get('[data-cy="sausage"]').check().should("be.checked")
        cy.get('[data-cy="mushrooms"]').check().should("be.checked")
        cy.get('[data-cy="peppers"]').check().should("be.checked")
    });
});