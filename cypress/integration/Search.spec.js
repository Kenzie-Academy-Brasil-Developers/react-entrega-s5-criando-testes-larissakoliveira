context("Search CEP", () => {
    it("Enters the page and search the CEP", () => {
        cy.visit('http://localhost:3000/')
        cy.viewport(1440, 900)
        cy.get("input").type('22041001')
        cy.contains("Buscar pelo CEP").click();

    })
})