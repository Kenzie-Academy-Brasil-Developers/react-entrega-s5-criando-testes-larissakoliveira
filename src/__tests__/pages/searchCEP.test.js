import { render, fireEvent, screen } from "@testing-library/react";
import Search from "../../components/Search";

describe("Search CEP", () => {
  it("should be able the right CEP", async () => {
    render(<Search />);
    const button = screen.getByText("Buscar pelo CEP");
    const cepinputValue = screen.getByText("Insira o CEP");
    fireEvent.click(button);
    fireEvent.change(cepinputValue, { target: { value: "22040001" } });
    expect(cepinputValue).toHaveValue("22040001");
  });
});