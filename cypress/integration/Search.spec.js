context("Enters the page and Search CEP", () => {
    it("Enters the page", () => {
        cy.visit('http://localhost:3000/')
        cy.viewport(1440, 900)
    });

    it("Search CEP", () => {
        cy.viewport(1440, 900)

        cy.intercept("GET", `${22041001}`, {
            bairro: "Copacabana",
      cep: 22041001,
      cidade: "Rio de Janeiro",
      cidade_info: { area_km2: "1200,179", codigo_ibge: "3304557" },
      complemento: "de 2174 a 2634 - lado par",
      estado: "RJ",
      estado_info: {
        area_km2: "43.781,566",
        codigo_ibge: "33",
        nome: "Rio de Janeiro",
      },
      logradouro: "Avenida Atlântica",
        });
        
            cy.get("input").type(22041001)
            cy.contains("Buscar pelo CEP").click();
    });


});