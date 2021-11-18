context("Search CEP", () => {
    it("Enters the page and search the CEP", () => {
        cy.visit('https://react-entrega-s5-criando-testes-larissakolivei-larissakoliveira.vercel.app')
        cy.viewport(1440, 900)
        cy.get("input").type('22041001')
        cy.contains("Buscar pelo CEP").click();

    })
})