import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import api from "../../services";
import Providers from "../../providers";
import App from "../../App";

const apiMock = new MockAdapter(api);

describe("Search CEP", () => {
  it("should be able to show the CEP", async () => {
    apiMock.onGet("22041001").replyOnce(200, {
      bairro: "Copacabana",
      cep: "22041001",
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
    
    render(
      <Providers>
        <App/>
      </Providers>
    );

    const button = screen.getByRole("button");
    const cepInputValue = screen.getByPlaceholderText("Insira o CEP");

    fireEvent.change(cepInputValue, { target: { value: "22041001" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(cepInputValue).toHaveValue(22041001);
      expect(screen.getByDisplayValue("Avenida Atlântica")).toBeTruthy();
      expect(screen.getByDisplayValue("Copacabana")).toBeTruthy();
      expect(screen.getByDisplayValue("RJ")).toBeTruthy();
    });
  });
});

